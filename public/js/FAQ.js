// update class for .toggle-inner and ion-icon on click
$(".toggle .toggle-title").click(function () {
    if ($(this).hasClass("active")) {
        // content
        $(this).removeClass("active").closest(".toggle").find(".toggle-inner").slideUp(200);
        // icon
        $(this).find("ion-icon").removeClass("rotated");
    }
    else {
        // content
        $(this).addClass("active").closest(".toggle").find(".toggle-inner").slideDown(200);
        // icon
        $(this).find("ion-icon").addClass("rotated");
    }
});

// show content if active
if ($(".toggle .toggle-title").hasClass('active')) {
    $(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
}


