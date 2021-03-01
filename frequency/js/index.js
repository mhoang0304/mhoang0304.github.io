$(window).on("load", function () {
    setTimeout(function (){
        $(".loading").fadeOut(600);
    },1000);
});

$(document).ready(function () {
    $(".nav__main-menu-item:nth-child(1) a").addClass("nav__main--location");
});