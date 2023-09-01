const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
        },
        "@0.70": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        "@0.85": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.20": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
 
        "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
