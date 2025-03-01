var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 25,  // Reduzido para aproximar os cards
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,  // Desativado para alinhar melhor
    // Adiciona autoplay
    autoplay: {
        delay: 5000, // 5 segundos
        disableOnInteraction: false, // Continua mesmo após interação do usuário
        pauseOnMouseEnter: true, // Pausa quando o mouse está sobre o slider
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});
