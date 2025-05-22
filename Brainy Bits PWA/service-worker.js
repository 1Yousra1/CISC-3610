const cacheName = 'brainy-bits-pwa-v1';
const staticAssets = [
    'index.html',
    'styles.css', // If you had a separate CSS file
    'assets/icon-192x192.png', // Include your icons for offline access
    'assets/icon-512x512.png'
];

self.addEventListener('install', async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || fetch(request);
}