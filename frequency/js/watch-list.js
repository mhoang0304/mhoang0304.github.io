$(document).ready(function () {
    $(".watch__option-list").slideUp(0);

    $(".watch__option--btn").click(function () {
        $(this).next().slideToggle(400);
        $(this).toggleClass("icon--rotate");
    });

    $("#filter").click(function () {
        $("#filter-options").toggleClass("watch__filter-options--show");
    });

    $(".watch__filter-options-link").click(function () {
        let option = $(this).text();
        $("#filter-content").text(option);

        $(".watch__filter-options-link").removeClass("active");
        $(this).addClass("active");
    });

    $(".watch__option-size-number").click(function () {
        $(this).toggleClass("watch__option-size--chose");
    });

    $(".heart").click(function () {
        $(this).toggleClass("fas").toggleClass("far");
    });
});