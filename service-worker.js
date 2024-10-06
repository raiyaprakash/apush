// Updated service-worker.js

self.addEventListener('install', (event) => {
    console.log('Service Worker: Updated Installed');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Updated Activated');
});

self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Updated Fetching', event.request.url);
    event.respondWith(fetch(event.request));
});
