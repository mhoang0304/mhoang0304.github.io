$(document).ready(function () {
    $(".watch__option-list").slideUp(0);

    $(".watch__option--btn").click(function () {
        $(this).next().slideToggle(400);
        $(this).toggleClass("icon--rotate");
    });


});