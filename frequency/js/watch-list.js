$(document).ready(function () {
    $(".watch__option-list").slideUp(0);

    $(".watch__option--btn").click(function () {
        $(this).next().slideToggle(400);
        $(this).toggleClass("icon--rotate");
    });

    $("#filter").click(function () {
        $("#filter-options").toggleClass("watch__filter-options--show");
    });

    $(".heart").click(function () {
        $(this).toggleClass("fas").toggleClass("far");
    });
});