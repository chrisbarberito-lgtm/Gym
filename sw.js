var V="pxb-v9";
self.addEventListener("install",function(e){self.skipWaiting();});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim());});
self.addEventListener("fetch",function(e){var req=e.request;if(req.method!=="GET")return;
  e.respondWith(fetch(req).then(function(res){var copy=res.clone();caches.open(V).then(function(c){c.put(req,copy);});return res;})
  .catch(function(){return caches.match(req);}));});
