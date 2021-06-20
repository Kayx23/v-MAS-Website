/* show icon only scrolling past a portion of the screen */
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('#scrolltop').stop(true, true).fadeOut();
    }
});

/* goes to the top */
$(function () {
    $("#scrolltop").click(function () {
        $("html, body").animate({
            scrollTop: $("#top").offset().top
        }, "1000");
        return false
    })
})