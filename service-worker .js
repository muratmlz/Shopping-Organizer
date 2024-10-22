self.addEventListener('install',
event => {
    console.log('Service Worker εγκαταστάθηκε');

    event.waitUntil(

        caches.open('shopping-list-cache').then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './style.css',
                './script.js',
                './manifest.json',
                './icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.responWith(

        caches.match(event.request).then(response => {
            return response ||
            fetch(event.request);
        })
    );
});