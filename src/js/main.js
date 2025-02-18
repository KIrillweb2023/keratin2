const swiper = new Swiper('.reviews__swiper', {
    loop: true,
    slidesPerView: 'auto', 
    spaceBetween: 30,  
    speed: 700,

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },


    pagination: {
        el: '.reviews__pagination',
        clickable: true,      
    },

    navigation: {
        nextEl: '.reviews__swiper-button-next',
        prevEl: '.reviews__swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});