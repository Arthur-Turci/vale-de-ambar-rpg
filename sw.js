const VERSION='vale-ambar-4.2';
self.addEventListener('install',event=>{event.waitUntil(self.skipWaiting())});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const names=await caches.keys();await Promise.all(names.filter(name=>name.startsWith('vale-ambar-')&&name!==VERSION).map(name=>caches.delete(name)));await self.clients.claim()})())});
self.addEventListener('message',event=>{if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{if(event.request.mode==='navigate'){event.respondWith(fetch(new Request(event.request,{cache:'no-store'})).catch(()=>new Response('Sem conexão. Conecte-se à internet e recarregue Vale de Âmbar.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}})))}});
