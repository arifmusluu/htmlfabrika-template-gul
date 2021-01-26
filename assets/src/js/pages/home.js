var _homePage = {

    Action: function() {
        var windowWidth = $(window).width();

        var _headerFixed = $("header.fixed-top");

        if (windowWidth < 992) {
            $("header").removeClass("fixed-top");
        }

        $(window).scroll(function() {
            if (windowWidth > 992) {
                var _topPos = $(this).scrollTop();
                if (_topPos > 0) {
                    _headerFixed.addClass("is-scroll");
                } else {
                    _headerFixed.removeClass("is-scroll");
                }
            }
        });

        var _hamburger = $(".hamburger");
        var _menubar = $(".menu-bar");

        _hamburger.click(function() {
            $(this).toggleClass("is-active");
            _menubar.toggleClass("is-active");
            $("body").toggleClass("show");
        });
    },

    homePromo: function() {
        var _homePromo = $('.home-promo');

        if (_homePromo.length) {
            _homePromo.slick({
                arrows: false,
                autoplay: true,
                autoplaySpeed: 8000,
                cssEase: 'linear',
                dots: true,
                speed: 500,
                fade: true,
                infinite: true,
                lazyLoad: 'ondemand',
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            arrows: true,
                            autoplaySpeed: 5000
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            arrows: false,
                            autoplaySpeed: 5000
                        }
                    }
                ]
            });
        };
    },

    homeFifth: function() {
        var _homeFifth = $('.fifth-slider');

        if (_homeFifth.length) {
            _homeFifth.slick({
                arrows: true,
                autoplay: true,
                autoplaySpeed: 8000,
                cssEase: 'linear',
                dots: false,
                speed: 500,
                fade: true,
                infinite: true,
                lazyLoad: 'ondemand',
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            arrows: true,
                            autoplaySpeed: 5000
                        }
                    },
                    {
                        breakpoint: 900,
                        settings: {
                            arrows: false,
                            dots: true,
                            autoplaySpeed: 5000
                        }
                    }
                ]
            });
        };
    },

    init: function() {
        this.Action();
        this.homePromo();
        this.homeFifth();
    }
};

$(function() {
    _homePage.init();
});