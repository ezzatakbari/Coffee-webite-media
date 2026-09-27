
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});

const swiper = new Swiper(".swiper",{

    loop:true,
    spaceBetween: 24,
    speed: 1000,
    effect:"coverflow",
    
    grabCursor: true,
    allowTouchMove: true,
    autoplay: {
        delay:3000, 
        disableOnIneraction:false,

    },

    pagination:{
        el:".swiper-pagination",
        clickable:true,
        dynamicBullets: true,
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView:1
        },
          550: {
            slidesPerView:2
        },
          1000: {
            slidesPerView:3
        },
    }

});

