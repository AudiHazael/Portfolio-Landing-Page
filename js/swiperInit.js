document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3, // Set a default value for slidesPerView
        spaceBetween: 0,
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
        breakpoints: {
            // Set different options for phone screens
            767: {
                slidesPerView: 1,
            },
            // Set different options for larger screens
            // 1200: {
            //     slidesPerView: 3,
            // }
        }
    });
});