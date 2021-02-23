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

    // Isotope
    $(".watch__main").isotope({
        itemSlector: ".all",
        layoutMode: 'fitRows',
        getSortData: {
            number: ".number parseInt"
        }
    });

    // Isotope - filter
    $(".watch__option-list-items").click(function () {
        let type = $(this).attr("data-filter");

        $(".watch__main").isotope({
            filter: type
        });
    });

    // Isotope - sort
    $("#sort").click(function () {
        let value = $(this).attr("data-sort");

        $(".watch__main").isotope({
            sortBy: value,
            sortAscending: true
        });
    });

    // Isotope - sort-reverse
    $("#sort-reverse").click(function () {
        let value = $(this).attr("data-sort");

        $(".watch__main").isotope({
            sortBy: value,
            sortAscending: false
        });
    });

    // Isotope - default
    $("#default").click(function () {
        let type = $(this).attr("data-filter");
            
        $(".watch__main").isotope({
            filter: type,
            sortBy : 'original-order',
            sortAscending: true
        });
    });

    
    // Isotope - filter--size
    let flag = true;

    // $(".watch__option-size-number").click(function () {
    //     let size = $(this).attr("data-size");
        
    //     $()

    // });

});