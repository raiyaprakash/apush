	navigator.serviceWorker.getRegistrations().then(registrations => {
  registrations.forEach(registration => {
    if (registration.active.scriptURL !== location.origin + "/firebase-messaging-sw.js") {
      registration.unregister().then(success => {
        if (success) {
          console.log('Service worker unregistered:', registration.active.scriptURL);
        } else {
          console.log('Failed to unregister service worker:', registration.active.scriptURL);
        }
      }).catch(error => {
        console.error('Error while unregistering service worker:', error);
      });
    }
  });
});
	
        async function registerServiceWorker() {
            if ("serviceWorker" in navigator) {
                try {
                    const registration = await navigator.serviceWorker.register(location.origin + "/firebase-messaging-sw.js", {
                        scope: location.origin
                    });
                    if (registration.installing) {
                        console.log("Service worker installing");
                    } else if (registration.waiting) {
                        console.log("Service worker installed");
                    } else if (registration.active) {
                        console.log("Service worker active");
                    }
                    return registration;
                } catch (error) {
                    console.error('Registration failed with');
                    throw error;
                }
            }
        }

        async function waitForXSeconds(seconds) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, seconds * 1000);
            }).catch(() => {
                console.log("Error in waitForXSeconds");
            });
        }

        (async function () {
            try {
                const sw = await registerServiceWorker();
                const permission = await Notification.requestPermission();
                if (permission !== 'granted') {
                    console.log('Permission not granted. Please try again.'); // replaced alert with
                    return;
                }
                let swActive = false;
                while (!swActive) {
                    await waitForXSeconds(4);
                    swActive = sw.active;
                }
                sw.active.postMessage({
                    command: "amp-web-push-subscribe",
                    url: window.location.href
                });
            } catch (error) {
                console.error("error");
            }
        })();
