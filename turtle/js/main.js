$(document).ready(function () {
    // let carousel = setInterval(function () {
        let imageNext = $(".active").next();

        // Xử lí trạng thái ảnh
        let status = $(".light").index() + 1;
        
        $(".status__items").removeClass("light");

        if(status == $(".status__items").length) {
            status = 0;
        }
        $(".status__items:nth-child("+ (status + 1) +")").addClass("light");

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
    // }, 3000);

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
});