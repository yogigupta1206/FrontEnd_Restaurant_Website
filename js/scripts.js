$(document).ready(function() {
    $("#mycarousel").carousel({
        interval: 1000
    });

    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
            $("#carouselButton").removeClass('btn-danger');
            $("#carouselButton").addClass('btn-success');

        } else {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
            $("#carouselButton").removeClass('btn-success');
            $("#carouselButton").addClass('btn-danger');
        }

    });

    $("#reserve-btn").click(function() {
        $("#reservationModal").modal('toggle');

    });

    $("#login-btn").click(function() {
        $("#loginModal").modal('toggle');

    });

    $("#login-cancel-btn").click(function() {
        $("#loginModal").modal('hide');

    });

    $("#reserve-cancel-btn").click(function() {
        $("#reservationModal").modal('hide');

    });

    /*
    
    $("#carousel-pause").click(function() {
        $("#mycarousel").carousel('pause');
    });

    $("#carousel-play").click(function() {
        $("#mycarousel").carousel('cycle');
    }); 
    
    $('[data-toggle="tooltip "]').tooltip();
    
    
    */
});