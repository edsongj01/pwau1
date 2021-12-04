//console.log('SW Hola mundo')

self.addEventListener('install',(event)=>{
    console.log('Service Worker instalado')
});

self.addEventListener('activate',(event)=>{
    console.log('SW: Activado y controlando la app')
});

self.addEventListener('fetch',(event)=>{
    console.log(event.request.url);

    if(event.request.url.includes('.PNG')){
        let newResp = fetch('/images/michi.jpg');
        console.log('Es una imagen');
        event.respondWith(newResp);
    }
    if(event.request.url.includes('page.css')){
        let newResponse = new Response(`body{
            background-color:black !important;
            color: red;
        }`,{
            headers:{
                'Content-Type':'text/css'  
            }
        });
        event.respondWith(newResponse);
    }
});