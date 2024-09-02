/* ===============================toggle icon navbar link==============================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/* ===============================scrol sections active link==============================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    /* ===============================sticky navbar link==============================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scorollY > 100);
};
/*===============================scroll reveal==============================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});
ScrollReveal().reveal('.home-content, .heading, .about-img', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-container, .content-box', { origin: 'bottom' });

ScrollReveal().reveal('.home-content, .h1', { origin: 'left' });
ScrollReveal().reveal('.home-content, .p, .about-content', { origin: 'Right' });
/*===============================type js==============================*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Video & Photo Edit', 'Graphic Design'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});