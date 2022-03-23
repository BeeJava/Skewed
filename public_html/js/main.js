$(document).ready(function () {

    function hamburgerToX() {
        $('.navbar-toggler span').each(function () {
            let dataClass = $(this).attr('data-class');
            $(this).toggleClass(dataClass);
        });
    }
    $('.navbar-toggler').click(function(){
        hamburgerToX();
    });

    function setMarginTop() {
        let headerHeight = $('header').outerHeight();
        $('main').css('marginTop', headerHeight);
    }
    function setMarginViaScroll() {
        let headerHeight = $('header').outerHeight();
        if (($(window).scrollTop()) > headerHeight) {
            $('header').addClass('py-2');
            headerHeight = $('header').outerHeight();
            $('main').css('marginTop', headerHeight);
        } else {
            $('header').removeClass('py-2');
            headerHeight = $('header').outerHeight();
            $('main').css('marginTop', headerHeight);
        }
    }
    setMarginViaScroll();
    setMarginTop();
    $(window).resize(function () {
        setMarginTop();
    }).scroll(function () {
        setMarginViaScroll();
        animation();
    });

    function animation() {
        let windowHeight = $(window).height();
        let scrollFromTop = $(window).scrollTop();
        $('.animation').each(function () {
            let elementPosition = $(this).offset().top;
            let animation = $(this).attr('data-animation');
            let animationDelay = $(this).attr('data-delay');
            if (elementPosition < scrollFromTop + windowHeight - 150) {
                $(this).css('animation-delay', animationDelay);
                $(this).addClass(animation);
            }
        });
    }
    animation();


    if ($('.team-slider').length > 0) {
        $('.team-slider').owlCarousel({
            autoplay: true,
            autoplayHoverPause: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2,
                    margin: 30
                },
                992: {
                    items: 3,
                    margin: 30
                },
                1200: {
                    items: 4,
                    margin: 30
                }
            }
        });
    }

    if ($('.portfolio-slider').length > 0) {
        $('.portfolio-slider').owlCarousel({
            autoplay: true,
            autoplayHoverPause: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2,
                    margin: 30
                },
                992: {
                    items: 3,
                    margin: 30
                },
                1200: {
                    items: 4,
                    margin: 30
                }
            }
        });
    }


    if ($('.counter').length > 0) {
        $('.counter').counterUp();
    }

    $(function () {
        $(".subscribe-form").validate({
            highlight: function (element) {
                $(element).addClass("is-invalid").removeClass("is-valid");
                $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
            },
            unhighlight: function (element) {
                $(element).removeClass('is-invalid').addClass('is-valid');
                $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
            },
            rules: {
                name: {
                    required: true,
                    rangelength: [2, 20]
                },
                email: {
                    required: true,
                    email: true
                }


            },
            messages: {
                name: {
                    required: 'Ime je obavezno polje',
                    rangelength: 'Ime mora bitii izmedju 2 i 20 karaktera'
                },

                email: {
                    required: 'Email je obavezno polje',
                    email: 'Unesite ispravan email'

                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-message'));
            }

        });
    });
});
