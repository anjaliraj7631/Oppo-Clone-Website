let contact1=document.querySelector('#chatbot');
let cont=document.querySelector('#bot');
contact1.onclick=()=>{
    cont.classList.toggle('active');
    cont2.classList.remove('active');
    cart.classList.remove('active');
    search.classList.remove('active');
    log.classList.remove('active')
    cont3.classList.remove('active')
}
let contact2=document.querySelector('#chatmessage');
let cont2=document.querySelector('#mess');
contact2.onclick=()=>{
    cont2.classList.toggle('active');
    cont.classList.remove('active');
    cart.classList.remove('active');
    search.classList.remove('active');
    log.classList.remove('active')
    cont3.classList.remove('active')
}

let cartIcon=document.querySelector('#cart');
let cart=document.querySelector('.cart');
cartIcon.onclick=()=>{
    cart.classList.toggle('active');
    cont.classList.remove('active');
    cont2.classList.remove('active');
    search.classList.remove('active');
    log.classList.remove('active')
    cont3.classList.remove('active')
}
let searchIcon=document.querySelector('#search');
let search=document.querySelector('#searchList');
searchIcon.onclick=()=>{
    search.classList.toggle('active');
    cont.classList.remove('active');
    cont2.classList.remove('active');
    cart.classList.remove('active')
    log.classList.remove('active')
    cont3.classList.remove('active')
}

let login1=document.querySelector('#user');
let log=document.querySelector('.accounts');
login1.onclick=()=>{
    log.classList.toggle('active');
    cart.classList.remove('active');
    cont.classList.remove('active')
    cont2.classList.remove('active')
    search.classList.remove('active')
    cont3.classList.remove('active')

}
let contact3=document.querySelector('#robo');
let cont3=document.querySelector('#bot1');
contact3.onclick=()=>{
    cont3.classList.toggle('active');
    cont2.classList.remove('active');
    cart.classList.remove('active');
    search.classList.remove('active');
    log.classList.remove('active')
    cont.classList.remove('active')
}