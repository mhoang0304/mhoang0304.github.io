$(window).on("load", function () {
    $("body").css("overflow", "auto");
    $(".loading").fadeOut(600);
});

$(document).ready(function () {

    $(window).scroll(function () {
        let scroll = $("html").scrollTop();
        let section2 = $("#story-2").offset().top;
        let section3 = $("#story-3").offset().top;
        console.log(scroll);

        if (scroll >= (section2 / 2)) {
            $(".story").removeClass("story-active").next().addClass("story-active");
        }
    });
});
