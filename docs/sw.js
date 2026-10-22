/* Sinregado service worker — offline + pembaruan otomatis.
   Strategi: ONLINE → selalu ambil versi terbaru dari GitHub Pages (jadi tak perlu mengubah angka apa pun
   tiap rilis). OFFLINE / jaringan lambat (>4 dtk) → pakai salinan tersimpan. */
const CACHE='sinregado-shell-v1';
const SCOPE=self.registration.scope;
const SHELL=['index.html','manifest.webmanifest','icons/icon.svg','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png'];
/* semua permintaan halaman utama disimpan di satu kunci: .../index.html (tanpa ?query) */
const keyOf=req=>{const u=new URL(req.url);u.search='';u.hash='';let h=u.href;if(req.mode==='navigate'||h===SCOPE)h=SCOPE+'index.html';return h};
self.addEventListener('install',e=>{e.waitUntil((async()=>{
  const c=await caches.open(CACHE);
  await Promise.all(SHELL.map(async p=>{try{const r=await fetch(new Request(SCOPE+p,{cache:'reload'}));if(r.ok)await c.put(SCOPE+p,r)}catch(_){}}));
  await self.skipWaiting();
})())});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{
  for(const k of await caches.keys())if((k.startsWith('pendamping-')||k.startsWith('sinregado-'))&&k!==CACHE)await caches.delete(k);
  await self.clients.claim();
})())});
self.addEventListener('message',e=>{if(e.data==='skip')self.skipWaiting()});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin||!u.href.startsWith(SCOPE))return;
  e.respondWith((async()=>{
    const c=await caches.open(CACHE),key=keyOf(r),hit=await c.match(key);
    const req=r.mode==='navigate'?new Request(r.url,{cache:'no-cache',credentials:'same-origin'}):r;
    const net=fetch(req).then(res=>{if(res&&res.ok&&res.type==='basic')c.put(key,res.clone());return res});
    if(!hit)return net.catch(()=>new Response('Offline',{status:503,headers:{'Content-Type':'text/plain'}}));
    e.waitUntil(net.catch(()=>{}));
    try{const res=await Promise.race([net,new Promise(ok=>setTimeout(()=>ok(null),4000))]);if(res)return res}catch(_){}
    return hit;
  })());
});
