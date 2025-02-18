import Swiper from "swiper"

// window.addEventListener("DOMContentLoaded", () => {
    console.log("ok")
  
    const swiper = new Swiper(".swiper", {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 10

        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
// })