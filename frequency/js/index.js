$(window).on("load", function () {
    setTimeout(function () {
        $("body").css("overflow", "auto");
        $(".loading").fadeOut(600);
    }, 1000);
});

$(document).ready(function () {
    $(".nav__main-menu-item:nth-child(1) a").addClass("nav__main--location");

    // scroll navbar
    $(window).scroll(function () {
        let scroll = $("html").scrollTop();
        let location = $(".main").offset().top;

        if (scroll >= location) {
            $(".nav").addClass("nav--change");
        } else {
            $(".nav").removeClass("nav--change");
        }

        let svg = $(".slide-main").offset().top;

        if(scroll >= svg) {
            $(".service__title-svg--truck").css("display", "block");
            $(".service__title-svg--truck").addClass("animation-truck");

            $(".service__title-svg--shield").css("display", "block");
            $(".service__title-svg--shield").addClass("animation-shield");
        }
    });
});