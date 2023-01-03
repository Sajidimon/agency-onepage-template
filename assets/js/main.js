$(document).ready(function () {
    var mixer = mixitup('.main-portfolio');

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '3',
        spaceBetween: 30,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
            autoplay: true
        },
        loop: true,
    });

    $('#testimonial-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });

    $('#client-logo-slider').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    new WOW().init();

});

    var slideImg = document.getElementById("slideimg");

    var images = new Array(
        "assets/img/hero-bg.jpg",
        "assets/img/hero-bg-1.jpg",
        "assets/img/hero-bg-2.jpg"
    );

    var len = images.length;
    var i = 0;

    function slider() {
        if (i > len - 1) {
            i = 0;
        }
        slideImg.src = images[i];
        i++;
        setTimeout('slider()', 3000);
    }