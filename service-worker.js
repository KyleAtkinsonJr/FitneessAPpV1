
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('fitness-tracker-cache-v1').then(cache => {
            return cache.addAll([
                './index.html',
                './manifest.json',
                './icons/icon-192.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
