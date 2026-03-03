var swVersion = "5.0.1";
const firebaseVersion = '12.10.0';

importScripts('https://www.gstatic.com/firebasejs/'+firebaseVersion+'/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/'+firebaseVersion+'/firebase-messaging-compat.js');

const options = {
    firebaseConfig: {
        projectId: "push-9a665",
        messagingSenderId: "1023228214099",
        appId: "1:1023228214099:web:750723559f00a405147fa6",
        apiKey: "AIzaSyBPei7_T6p1YDyoXNID7cFRixX96pPJ2Z0",
    },
    domain: "autopush.in",
    api_url: "https://api.autopush.in/webpush/token/save.php",
    vapid_public_key: "BCQhmt3Juj00X6yakLlIAAzuj_YgbHOHTRQdZwfPS_PX4q05cUttnrrAHZcLuI2fbN5DlV-1nQh8FkPlC0_xbAg",
    one_time_collect: 1,
}

firebase.initializeApp({ ...options.firebaseConfig });

self.addEventListener('activate', function (a) {
    a.waitUntil(clients.claim());
    if (options.one_time_collect != 1) {
        onMessageReceivedSubscribe(self.location.href);
    }
});

self.addEventListener("install", (event) => {
    event.waitUntil(self.skipWaiting());
});
/**
  * Receives push notification.
  * 
  * Shows the notification to the user.
 */
self.addEventListener('push', (event) => {
    if (!event.data) return;
    let payload = null;
    try {
        payload = event.data ? event.data.json() : null;
    } catch (e) {
        console.error("Push JSON parse error");
        return;
    }

    if (!payload || !payload.data) return;
    let notificationData = {};
    try {
        notificationData = JSON.parse(payload.data.notification);
    } catch (e) {
        console.error("Invalid notification JSON", e);
        return;
    }

    let isMacOS = false;
    if ("userAgentData" in navigator) {
        isMacOS = navigator.userAgentData?.platform === "macOS";
    } else {
        isMacOS = /Mac/.test(self.avigator.userAgent);
    }

    if (notificationData.requireInteraction == null) {
        notificationData.requireInteraction = false;
    }

    let requireInteraction = isMacOS ? false : notificationData.requireInteraction;

    if (notificationData.url) {
        const showNotificationPromise = self.registration.showNotification(notificationData.title, {
            ...notificationData,
            data: notificationData,
            requireInteraction: requireInteraction
        });

        const deliveredPromise = (notificationData.delivered_api) ?
            fetch(notificationData.delivered_api) :
            Promise.resolve();

        event.waitUntil(
            Promise.all([
                showNotificationPromise,
                deliveredPromise
            ])
        );
    }

    if (payload.data.swVersion != swVersion) {
        console.log("SW Version is different, Updating SW");
        self.registration.update();
    }

});

/**
  * Gets called when notification is clicked.
  * 
  * Opens a new tab in browser.
 */

self.addEventListener('notificationclick', (event) => {
    let targetUrl = event.notification.data.url || "/";
    let apiUrl = event.notification.data.api_url;

    if (event.action && event.notification.data.actions[event.action]) {
        targetUrl = event.notification.data.actions[event.action].click_action;
        apiUrl = event.notification.data.actions[event.action].api_url;
    }

    event.notification.close();
    event.waitUntil(
        Promise.all([
            clients.openWindow(targetUrl),
            apiUrl ? fetch(apiUrl) : Promise.resolve()
        ])
    );

});


/** ================= FOR AMP ================ */

/** @enum {string} */
const WorkerMessengerCommand = {
    /*
      Used to request the current subscription state.
     */
    AMP_SUBSCRIPTION_STATE: 'amp-web-push-subscription-state',
    /*
      Used to request the service worker to subscribe the user to push.
      Notification permissions are already granted at this point.
     */
    AMP_SUBSCRIBE: 'amp-web-push-subscribe',
    /*
      Used to unsusbcribe the user from push.
     */
    AMP_UNSUBSCRIBE: 'amp-web-push-unsubscribe',
};

self.addEventListener('message', (event) => {
    /*
      Messages sent from amp-web-push have the format:
  
      - command: A string describing the message topic (e.g.
        'amp-web-push-subscribe')
  
      - payload: An optional JavaScript object containing extra data relevant to
        the command.
     */
    const { command, url, extraData, topic } = event.data;

    switch (command) {
        case WorkerMessengerCommand.AMP_SUBSCRIPTION_STATE:
            onMessageReceivedSubscriptionState();
            break;
        case WorkerMessengerCommand.AMP_SUBSCRIBE:
            onMessageReceivedSubscribe(url, extraData, topic);
            break;
        case WorkerMessengerCommand.AMP_UNSUBSCRIBE:
            onMessageReceivedUnsubscribe();
            break;
    }
});

/**
 * Broadcasts a single boolean describing whether the user is subscribed.
 */
function onMessageReceivedSubscriptionState() {
    let retrievedPushSubscription = null;
    self.registration.pushManager
        .getSubscription()
        .then((pushSubscription) => {
            retrievedPushSubscription = pushSubscription;
            if (!pushSubscription) {
                return null;
            } else {
                return self.registration.pushManager.permissionState(pushSubscription.options);
            }
        })
        .then((permissionStateOrNull) => {
            if (permissionStateOrNull == null) {
                broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIPTION_STATE, false);
            } else {
                const isSubscribed = !!retrievedPushSubscription && permissionStateOrNull === "granted";
                broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIPTION_STATE, isSubscribed);
            }
        });
}

/**
 * Subscribes the visitor to push.
 *
 * The broadcast value is null (not used in the AMP page).
 */
async function onMessageReceivedSubscribe(url, extraData = null, topic = null) {
    try {
        await subscribePushManager(url, extraData, topic);
    } catch (error) {
        console.log("Error in onMessageReceivedSubscribe: ", error);
        // Unsubscribe the old service worker subscription
        const subscription = await self.registration.pushManager.getSubscription();
        if (subscription) {
            const successful = await subscription.unsubscribe();
            if (successful) {
                console.log("Unsubscribed successfully");
                // Retry the subscription
                await subscribePushManager(url);
            } else {
                console.log("Unsubscribe failed");
            }
        }
    }
}

let promiseChain = Promise.resolve();
async function subscribePushManager(url, extraData = null, topic = null) {
    promiseChain = promiseChain.then(async () => {
        await self.registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: options.vapid_public_key,
        });

        broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIBE, null);
        var newSubscription = await self.registration.pushManager.getSubscription();
        if (!newSubscription) {
            return;
        }
        newSubscription = newSubscription.toJSON();

        const messaging = firebase.messaging();
        const token = await messaging.getToken({
            vapidKey: options.vapid_public_key,
            serviceWorkerRegistration: self.registration,
        });

        let domain = getDomainAndHostname(url).hostname;
        let shouldSend = (await readData("notification_token")) != token;

        if (extraData?.collectionDomain) {
            domain = extraData.collectionDomain;
            if (shouldSend) {
                await writeData("notification_token_domains", "[]");
            } else {
                const savedDomains = JSON.parse((await readData("notification_token_domains", "[]")) || "[]");
                shouldSend = !savedDomains.some(item => item.domain === domain);
            }
        }

        if (shouldSend) {
            topic = topic ?? options.topic ?? domain.replace(/\./g, '') ?? "alluser";
            await fetch(options.api_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    domain,
                    token,
                    url: url,
                    endpoint: newSubscription.endpoint,
                    auth: newSubscription.keys.auth,
                    p256dh: newSubscription.keys.p256dh,
                    vapidpublickey: options.vapid_public_key,
                    expirationTime: newSubscription.expirationTime,
                    topic: topic,
                    extraData: extraData,
                }),
            }).then(async (res) => {
                if (res.status == 200) {
                    await writeData("notification_token", token);
                    let domains = JSON.parse((await readData("notification_token_domains", "[]")) || "[]");
                    domains.push({
                        domain: domain
                    });
                    await writeData("notification_token_domains", JSON.stringify(domains));
                    console.log("Notification Token Sent.");
                    return res.json();
                }
                console.log("Notification Token Send Error ", res.status);
            });
        }
    }).catch(err => {
        console.log('Error:', err);
    });
}

/**
 * Get Hostname from URL
 */
function getDomainAndHostname(url) {
    const urlObj = new URL(url);
    return {
        hostname: urlObj.hostname
    };
}

/**
 * Unsubscribes the subscriber from push.
 *
 * The broadcast value is null (not used in the AMP page).
 */
function onMessageReceivedUnsubscribe() {
    self.registration.pushManager
        .getSubscription()
        .then((subscription) => subscription.unsubscribe())
        .then(() => {
            // OPTIONALLY IMPLEMENT: Forward the unsubscription to your server here
            broadcastReply(WorkerMessengerCommand.AMP_UNSUBSCRIBE, null);
        });
}

/* ================= BROADCAST ================= */

function broadcastReply(command, payload) {
    self.clients.matchAll().then((clients) => {
        for (const client of clients) {
            client.postMessage({
                command,
                payload
            });
        }
    });
}

/* ================= IndexedDB ================= */

let dbPromise;
function openDatabase() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
        const request = indexedDB.open("autopushDataBase", 1);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("myObjectStore")) {
                db.createObjectStore("myObjectStore", { keyPath: "id" });
            }
        };
        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
        request.onerror = (event) => {
            reject(event.target.error);
        };
    });

    return dbPromise;
}

async function writeData(key, value) {
    const db = await openDatabase();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction("myObjectStore", "readwrite");
        const objectStore = transaction.objectStore("myObjectStore");
        const request = objectStore.put({id: key,data: value});
        request.onsuccess = () => resolve(true);
        request.onerror = () => reject(request.error);
    });

}

async function readData(key, defaultValue = null) {
    const db = await openDatabase();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction("myObjectStore", "readonly");
        const objectStore = transaction.objectStore("myObjectStore");
        const request = objectStore.get(key);
        request.onsuccess = () => {
            resolve(request.result ? request.result.data : defaultValue);
        };
        request.onerror = () => reject(request.error);
    });

}
