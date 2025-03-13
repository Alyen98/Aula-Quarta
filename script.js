var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 90,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});