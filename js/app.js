console.log('hola mundos desde app js');
console.log('El service esta disponible ?');

let url = window.location.href;
let swDirect = "/pwau1/sw.js"

if(navigator.serviceWorker){
    console.log("Simon")

    if(url.includes('localhost')){
        swDirect='/sw.js';
    }

    navigator.serviceWorker.register(swDirect)
}else{
    console.log("Nel")
}