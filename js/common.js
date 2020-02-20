$(document).ready(function() {

    $(".lang-call").on("click", function() {
        $(".lang-hide").fadeToggle(100);
    });

    $(".map-box-call").on("click", function(){
        $(".header-phone-mob").slideUp(100);
        $("nav").slideUp(100);
        $(".header-map-box").slideToggle(100);
    });

    $(".close-tab-map").on("click", function(){
        $(".header-phone-mob").slideUp(100);
        $("nav").slideUp(100);
        $(".header-map-box").slideUp(100);
    });

    $(".phone-box-call").on("click", function(){
        $(".header-map-box").slideUp(100);
        $("nav").slideUp(100);
        $(".header-phone-mob").slideToggle(100);
    });

    $(".close-tab-phone").on("click", function(){
        $(".header-map-box").slideUp(100);
        $("nav").slideUp(100);
        $(".header-phone-mob").slideUp(100);
    });

    $(".menu-btn").on("click", function() {
        $(".header-map-box").slideUp(100);
        $(".header-phone-mob").slideUp(100);
        $("nav").slideToggle(100);
    });


    $(".nav-link-box").hover(
        function() {
            $(this).find(".hover-act").addClass("nav-link-active");
            $(this).find(".nav-desk-box-links").fadeIn(0);
        },
        function() {
            $(".nav-desk-box-links").fadeOut(150);
            $(".hover-act").removeClass("nav-link-active");
        }
    );

    $(".nav-link").hover(
        function() {
            $(".box-sm-link").hide();
            $(this).next(".box-sm-link").show();
        },
    );

    

    $(window).resize(function() {
        if ($(window).width() < 990) {
            $('.desk-call-hover').unbind('mouseenter mouseleave');
            $('.nav-link').unbind('mouseenter mouseleave')
        }
    });

    $(".hover-act").on("click", function(e) {
        e.preventDefault();
        $(this).find("nav-desk-box-links").fadeToggle(100);
    });


    $('.team .responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.banner .single').slick({
        infinite: true,
        dots: true,
        arrows: true,
        responsive: [{
            breakpoint: 990,
            settings: {
                arrows: false
            }
        },]
    });

    $('.advantages-container-mob .two-slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
    });

    $('.news-container-mob .single-2').slick({
        infinite: true,
        dots: true,
        arrows: false,
    });

});