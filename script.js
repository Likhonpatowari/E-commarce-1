

let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};


let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li ');

window.onscroll = () =>{
    // sticky navber
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    // remove toggle icon and navber when clicek

    menuIcon.classList.remove('bx-x');
    nav.classList.remove('active');
};