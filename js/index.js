var swiper = new Swiper(" .mySwiper", {
    slidesPerview: 3,
    spaceBetweem: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEL: ".swiper-button-next",
        prevEL: "swiper-button-prev"
    }
})