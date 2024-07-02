
$(document).ready(function () {
    $("#loader").fadeIn();
    setTimeout(function () {
        $("#loader").fadeOut();
    }, 1000);
});


$(".profile-box").click(function () {
    $('#dropdown').toggle();
});

$(".filter").click(function () {
    $('#dropdown1').toggle();
});

$(".userprofile1").click(function () {
    $('#dropdown2').toggle();
});

$(".userprofile2").click(function () {
    $('#dropdown3').toggle();
});



