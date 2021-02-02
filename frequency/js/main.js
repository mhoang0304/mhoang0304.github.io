$(document).ready(function () {
    // Navigation Mobile
    $(".nav__moblie-btn").click(function () {
        $(".nav__moblie").css({"transform": "translateX(0%)", "opacity": "1"});
        $(".nav__overlay").css("display", "block");
    });

    $(".nav__overlay").click(function () {
        $(".nav__moblie").css({"transform": "translateX(-100%)", "opacity": "0"});
        $(".nav__overlay").css("display", "none");
    });

    $(".nav__moblie-close--link").click(function () {
        $(".nav__moblie").css({"transform": "translateX(-100%)", "opacity": "0"});
        $(".nav__overlay").css("display", "none");
    });
});

