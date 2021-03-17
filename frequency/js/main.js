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
    $(".login-btn").click(function () {
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
    $(".register-btn").click(function () {
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

    // footer\
    $(".footer__feedback").click(function () {
        $(".instargram").css("display", "flex");
    });

    $(".instargram__close").click(function () {
        $(".ins").removeClass("ins--show");
        $(".instargram").css("display", "none");
    });

    // Hiển thị theo từng class
    $(".js-footer__feedback-1").click(function () {
        $(".js-ins-1").addClass("ins--show");
    });

    $(".js-footer__feedback-2").click(function () {
        $(".js-ins-2").addClass("ins--show");
    });

    $(".js-footer__feedback-3").click(function () {
        $(".js-ins-3").addClass("ins--show");
    });

    $(".js-footer__feedback-4").click(function () {
        $(".js-ins-4").addClass("ins--show");
    });

    // Next
    $(".js-instargram__btn-next").click(function () {
        let next = $(".ins--show").next();

        if (next.length == 0) {
            $(".ins").removeClass("ins--show");
            $(".ins:first-child").addClass("ins--show");
        } else {
            $(".ins--show").removeClass("ins--show").next().addClass("ins--show");
        }
    });

    // Prev
    $(".js-instargram__btn-prev").click(function () {
        let prev = $(".ins--show").prev();

        if (prev.length == 0) {
            $(".ins").removeClass("ins--show");
            $(".ins:last-child").addClass("ins--show");
        } else {
            $(".ins--show").removeClass("ins--show").prev().addClass("ins--show");
        }
    });

    // localstorage
    $("#btn-register").click(function () {
        let user = {
            name: $("#register-name").val(),
            username: $("#register-email").val(),
            password: $("#register-password").val()
        }

        localStorage.setItem("user", JSON.stringify(user));  
    })

    $("#btn-login").click(function () {
        let check = JSON.parse(localStorage.getItem("user"));
        console.log(check);
        if ($("#login-username").val() !== check.username) {
            alert("Sai roi nhe")
        } else {
            alert("Dung roi do")
        }
        console.log($("#login-username").val());
        console.log(check.username);
    });
});

