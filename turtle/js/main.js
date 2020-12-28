$(document).ready(function () {
    //Responsive navbar:
    $(".carousel").height($(".carousel__img").height());

    $(window).resize(function () {
        $(".carousel").height($(".carousel__img").height());
    });

    //Carousel thứ 1:
    let carousel = setInterval(function () {
        let imageNext = $(".active").next();

        // Xử lí trạng thái ảnh
        let status = $(".light").index() + 1;

        $(".status__items").removeClass("light");

        if (status == $(".status__items").length) {
            status = 0;
        }
        $(".status__items:nth-child(" + (status + 1) + ")").addClass("light");

        if (imageNext.length == 0) { // Đến slide cuối cùng
            $(".active").addClass("move-out").one("webkitAnimationEnd", function () {
                $(".move-out").removeClass("move-out");
            });

            $(".carousel__img:first-child").addClass("move-in").one("webkitAnimationEnd", function () {
                $(".active").removeClass("active");
                $(".move-in").addClass("active").removeClass("move-in");
            });
        } else {
            $(".active").addClass("move-out").one("webkitAnimationEnd", function () {
                $(".move-out").removeClass("move-out");
            });

            imageNext.addClass("move-in").one("webkitAnimationEnd", function () {
                $(".active").removeClass("active");
                $(".move-in").addClass("active").removeClass("move-in");
            });
        }
    }, 3000);

    // Xử lí khi click vào nút
    $(".status__items").click(function () {
        clearInterval(carousel);

        $(".status__items").removeClass("light");

        $(this).addClass("light");

        $(".active").addClass("move-out").one("webkitAnimationEnd", function () {
            $(".move-out").removeClass("move-out");
        });

        $(".carousel__img:nth-child(" + ($(this).index() + 1) + ")").addClass("move-in").one("webkitAnimationEnd", function () {
            $(".active").removeClass("active");
            $(".move-in").addClass("active").removeClass("move-in");
        });
    });

    //Xử lí button navbar:
    $(".nav__mobile-btn").click(function () {
        $(".nav__overlay").css("display", "block");
        $(".nav__mobile").css("transform", "translateX(0%)");
    });

    $(".nav__overlay").click(function () {
        $(".nav__overlay").css("display", "none");
        $(".nav__mobile").css("transform", "translateX(-100%)");
    });

    $(".nav__mobile-close").click(function () {
        $(".nav__overlay").css("display", "none");
        $(".nav__mobile").css("transform", "translateX(-100%)");
    });

    //Carousel thứ 2:
    $('.slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true
    });
});



