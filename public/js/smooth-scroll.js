// original snippet is from https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1

$(document).ready(function () {

    $("nav a").on('click', function (event) {

        // $(this.hash).length !== 0 makes sure not to prevent default browser behaviour
        // when the corresponding section is on a different page
        if (this.hash !== "" && $(this.hash).length !== 0) {

            // Prevent default anchor click behavior
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {

                // section to scroll to
                window.location.hash = hash;
            });
        }
    });
});