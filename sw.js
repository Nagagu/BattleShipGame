const STATIC_CHACHE = "static-v1";
const DYNAMIC_CACHE = "dynamic-v1";
const INMUTABLE_CHACHE = "inmutable-v1";

const APP_SHELL = ["/", "index.html", "css/style.css", "js/app.js"];

const APP_SHELL_INMUTABLE = [
  "https://fonts.googleapis.com/css2?family=Titan+One&display=swap",
];

self.addEventListener("install", (e) => {
  const cacheStatic = caches
    .open(STATIC_CHACHE)
    .then((cache) => cache.addAll(APP_SHELL));
  const cacheInmutable = caches
    .open(INMUTABLE_CHACHE)
    .then((cache) => cache.addAll(APP_SHELL_INMUTABLE));
  e.waitUntil(Promise.all([cacheStatic, cacheInmutable]));
});

self.addEventListener("activate", (e) => {
  const respuesta = caches.keys().then((keys) => {
    keys.forEach((key) => {
      if (key !== STATIC_CHACHE && key.includes("static")) {
        return caches.delete(key);
      }
    });
  });
});