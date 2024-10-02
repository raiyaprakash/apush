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

// Function to send live traffic data to the server
function sendTrafficData() {
    const pageVisited = window.location.pathname;
    const domain = window.location.origin; // Get the domain from the current URL

    // Prepare the data to send to the server
    const trafficData = {
        page: pageVisited,
        domain : domain // Include the domain in the traffic data
    };

    // Send data to the server using fetch
    fetch('https://api.autopush.in/track/live_traffic.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(trafficData)
    }).then(response => response.text()).then(data => {
        console.log('Server response:', data);
    }).catch(error => {
        console.error('Error:', error);
    });
}

sendTrafficData();
// Detect and send traffic data every 30 seconds
setInterval(() => {
    sendTrafficData();
}, 30000); // Sends data every 30 seconds
