$(document).ready(function () {
    $(".main").isotope({
        itemSelector: ".all"
    });
});

$(".nav__menu-item").click(function () {
    let type = $(this).attr("data-filter")
    console.log(type);

    $(".main").isotope({
        filter: type
    });
});