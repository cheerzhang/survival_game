// Actions 部署时将占位符替换为本次 commit SHA，确保每次 push 都产生新缓存。
const CACHE='island-survival-__BUILD_VERSION__';
const ASSETS=['./','./index.html','./style.css','./ai-strategy.js','./neural-strategy.js','./imitation-strategy.js','./game.js','./imitation.js','./manifest.webmanifest','./assets/forest-bg.png','./assets/icon-192.png','./assets/icon-512.png','./assets/apple-touch-icon.png','./assets/favicon-32.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request))));
