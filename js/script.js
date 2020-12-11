
// =============== Menu bar click for fadeout===========

$(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse('hide')
})


// ============ Fixed Menu ==============

$(window).scroll(function () {
    $scrollamount = $(window).scrollTop();

    if ($scrollamount > 400) {
        $(".menu").addClass("fixed");
    } else {
        $(".menu").removeClass("fixed");
    }

    if ($scrollamount > 1000) {
        $(".btnlast").fadeIn();
    } else {
        $(".btnlast").fadeOut();
    }

});



// =================== VenoBox Link ====================

$(document).ready(function(){
    $('.venobox').venobox();
});


// =================== company-part slider ========================

$('#company-part .company').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});




// ============================ meetClient-part slider ============================

$('#meetClient-part .slider-part').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



// ================= Wow js Link ==============

new WOW().init();