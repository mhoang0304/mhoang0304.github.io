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
        $("#login-form").css("display", "block");
        $("#overlay-form").css("display", "block");
    });

    $("#login-close").click(function () {
        $("#login-form").css("display", "none");
        $("#overlay-form").css("display", "none");
    });

    $("#change-register").click(function () {
        $("#login-form").css({ "transform": "translate(-150%, -50%)", "opacity" : "0"});
        $("#register-form").css("display", "block");
    });

    // Register
    $("#register").click(function () {
        $("#register-form").css("display", "block");
        $("#overlay-form").css("display", "block");
    });

    $("#register-close").click(function () {
        $("#register-form").css("display", "none");
        $("#overlay-form").css("display", "none");
    });

    $("#change-login").click(function () {
        $("#register-form").css({ "transform": "translate(-150%, -50%)", "opacity" : "0"});
        $("#login-form").css("display", "block");
    });
});

