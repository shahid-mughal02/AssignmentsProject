$(function () {
    $('.brand_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 876,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.client_slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<button type="button" class="slick-prev"><i class="fa-solid fa-left-long"></i></button>`,
        nextArrow: `<button type="button" class="slick-next"><i class="fa-solid fa-right-long"></i></button>`,
    });
    $('.accordion_item button').click(function(){
        $(this).next().slideToggle();
    })
    $('.toggle').click(function(){
        $('.toggle i').toggleClass('fa-times');
        $('.site_header .responsive_navbar').toggleClass('-translate-x-64');
    })
})
