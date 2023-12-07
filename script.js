var swiper = new Swiper(".box-content", {
    slidesPerView: 4,
    // spaceBetween: 10,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints:{
        0: {
            slidesPerView: 2,
        },
        520: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 5,
        },
    },
});


