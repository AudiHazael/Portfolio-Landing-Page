document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 5000, // Increase the delay to make it slower (in milliseconds)
            disableOnInteraction: false,
        },
        speed: 1500, // Adjust the speed of slide transition (in milliseconds)
        effect: 'slide', // Choose the slide effect for smooth transition
        easing: 'linear', // Choose the easing function for smooth motion
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});