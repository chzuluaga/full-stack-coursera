$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 3000 });
    $("#carousel-button").click(function () {
        if ($("#carousel-button").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
        } else {
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass("fa-play");
            $("#carousel-button").children("span").addClass("fa-pause");
        }
    });
});

$("#reserveTableLink").click(function () {
    $("#reserveModal").modal("toggle");
});

$(document).keyup(function(ev){
    if(ev.keyCode == 27)
        $("#reserveModal").trigger("click");
});

$("#loginLabel").click(function () {
    $("#loginModal").modal("toggle");
});

$(document).keyup(function(ev){
    if(ev.keyCode == 27)
        $("#loginModal").trigger("click");
});

