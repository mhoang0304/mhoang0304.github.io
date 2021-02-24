$(document).ready(function () {
    // Navigation Mobile
    $(".nav__moblie-btn").click(function () {
        $(".nav__moblie").css({ "transform": "translateX(0%)", "opacity": "1" });
        $(".nav__overlay").css("display", "block");
    });

    $(".nav__overlay").click(function () {
        $(".nav__moblie").css({ "transform": "translateX(-100%)", "opacity": "0" });
        $(".nav__overlay").css("display", "none");
    });

    $(".nav__moblie-close--link").click(function () {
        $(".nav__moblie").css({ "transform": "translateX(-100%)", "opacity": "0" });
        $(".nav__overlay").css("display", "none");
    });

    // Login
    $("#login").click(function () {
        $("#login-form").css({
            "visibility": "visible",
            "opacity": "1",
            "transform": "translate(-50%, -50%)"
        });
        $("#overlay-form").css("display", "block");
    });

    $("#login-close").click(function () {
        $("#login-form").css({ "visibility": "hidden", "opacity": "0" });
        $("#overlay-form").css("display", "none");
    });

    $("#change-register").click(function () {
        $("#register-form").css("transform", "translate(-150%, -50%)");

        $("#login-form").css({
            "transform": "translate(-150%, -50%)",
            "opacity": "0",
            "visibility": "hidden"
        });
        $("#register-form").css({
            "visibility": "visible",
            "opacity": "1",
            "transform": "translate(-50%, -50%)"
        });
    });

    // Register
    $("#register").click(function () {
        $("#register-form").css({
            "visibility": "visible",
            "opacity": "1",
            "transform": "translate(-50%, -50%)"
        });
        $("#overlay-form").css("display", "block");
    });

    $("#register-close").click(function () {
        $("#register-form").css({ "visibility": "hidden", "opacity": "0" });
        $("#overlay-form").css("display", "none");
    });

    $("#change-login").click(function () {
        $("#register-form").css({
            "transform": "translate(-150%, -50%)",
            "opacity": "0",
            "visibility": "hidden"
        });

        $("#login-form").css({
            "visibility": "visible",
            "transform": "translate(-50%, -50%)",
            "opacity": "1"
        });
    });
});

