let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;
//NORMATIVAS
//-------botones
let normativas = document.querySelector('.inf-normativas')
let btnGeneral = document.querySelector('.gen');
let btnDPA = document.querySelector('.dpa');
let btnIPS = document.querySelector('.ips');
let btnSDA = document.querySelector('.sda')
//------informacion
let ngeneral = document.querySelector('.generales');
let dpa = document.querySelector('.ndpa');
let ips = document.querySelector('.nips');
let sda = document.querySelector('.nsda')

// NAVEGAR
//####MENU DE NAVEGACION
btnMenu.addEventListener('click', () => {
    document.querySelector('.btn-menu i').classList.toggle('fa-times')
    if(activador){
        menu.style.left = "0";
        menu.style.transition = "0.7s";
        activador = false;
    }else{
        activador = false;
        menu.style.left = "-100%";
        menu.style.transition = "0.7s";
        activador = true;
    }
});
//######NORMATIVAS
//-----Generales    
btnGeneral.addEventListener('click', () => {
    document.querySelector('.gen button')
    if(activador){
        ngeneral.style.contain = "strict";
        ngeneral.style.transition = "5s";
        activador = false;
    }
    else{
        activador = false;
        ngeneral.style.contain = "none";
        ngeneral.style.transition = "5s";
        dpa.style.contain = "strict";
        ips.style.contain = "strict";
        sda.style.contain = "strict";
        activador = true;
    }
});
//-------DPA
btnDPA.addEventListener('click', () => {
    document.querySelector('.dpa button')
    if(activador){
        dpa.style.contain = "strict";
        dpa.style.transition = "5s";
        activador = false;
    }else{
        activador = false;
        dpa.style.contain = "none";
        dpa.style.transition = "5s";
        ngeneral.style.contain = "strict";
        ips.style.contain = "strict";
        sda.style.contain = "strict";
        activador = true;
    }
});
//--------IPS
btnIPS.addEventListener('click', () => {
    document.querySelector('.ips button')
    if(activador){
        ips.style.contain = "strict";
        ips.style.transition = "5s";
        activador = false;
    }else{
        activador = false;
        ips.style.contain = "none";
        ips.style.transition = "5s";
        ngeneral.style.contain = "strict";
        dpa.style.contain = "strict";
        sda.style.contain = "strict";
        activador = true;
    }
});
//--------SDA
btnSDA.addEventListener('click', () => {
    document.querySelector('.sda button')
    if(activador){
        sda.style.contain = "strict";
        sda.style.transition = "5s";
        activador = false;
    }else{
        activador = false;
        sda.style.contain = "none";
        sda.style.transition = "5s";
        ngeneral.style.contain = "strict";
        dpa.style.contain = "strict";
        ips.style.contain = "strict";
        activador = true;
    }
});

// CAMBIAR ACTIVO
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach( (element) => {
    element.addEventListener('click', (event) =>{
        enlaces.forEach( (link) =>{
            link.classList.remove('activo');    
        });
        event.target.classList.add('activo');
    });
});

// SCROLL
let prevScrollPos = window.pageYOffset;
let subir = document.querySelector('.subir');
window.onscroll =  () => {
    let currenScrollPos = window.pageYOffset;
    
    //MOSTRAR - OCULTAR
    if(prevScrollPos > currenScrollPos){
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";
    }else{
        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currenScrollPos;

    // MOSTRAR - OCULTAR ESTILOS

    let arriba = window.pageYOffset

    if(arriba <= 600){
        containerMenu.style.borderBottom = "none";
        containerMenu.style.transition = "2s"

        subir.style.right = "-100%"
        subir.style.transition = "1s"
    }else{
        containerMenu.style.borderBottom = "5px solid #00a120";
        containerMenu.style.transition = "2s"

        subir.style.right = "0"
        subir.style.transition = "1s"
    }
}

//LLEVARTE HACIA ARRIBA
subir.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let verAbajo = document.querySelector('#abajo');
verAbajo.addEventListener('click', () => {
    document.body.scrollTop = 850;
    document.documentElement.scrollTop = 850;
});

//FORMULARIO

