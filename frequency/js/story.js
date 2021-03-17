$(window).on("load", function () {
    $("body").css("overflow", "auto");
    $(".loading").fadeOut(600);
});

$(document).ready(function () {

    $(window).scroll(function () {
        let scroll = $("html").scrollTop();
        let section1 = $("#story-1").offset().top;
        let section2 = $("#story-2").offset().top;
        let section3 = $("#story-3").offset().top;
        let section4 = $("#story-4").offset().top;
        let section5 = $("#story-5").offset().top;

        if ((section5 - section2 / 2) <= scroll) {
            $(".story").removeClass("story-active")
            $("#story-5").addClass("story-active");
        } else if ((section4 - section2 / 2) <= scroll) {
            $(".story").removeClass("story-active")
            $("#story-4").addClass("story-active");
            console.log("3");
        } else if ((section3 - section2 / 2) <= scroll) {
            $(".story").removeClass("story-active")
            $("#story-3").addClass("story-active");
            console.log("3");
        } else if ((section2 / 2) <= scroll) {
            $(".story").removeClass("story-active")
            $("#story-2").addClass("story-active");
            console.log("2");
        } else if ((section2 / 2) >= scroll) {
            console.log("1");
            $(".story").removeClass("story-active");
            $("#story-1").addClass("story-active");
        }
    });
});
