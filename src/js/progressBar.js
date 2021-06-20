
// https://codepen.io/Codepalm/pen/oNXqWRV

document.ready = function (callback) {
    if (document.readyState != 'loading') {
        callback();
    }
    else {
        document.addEventListener('DOMContentLoaded', callback);
    }
};


(function () {

    document.ready(function () {

        let progressbar = document.getElementById("progressbar");
        if (!!progressbar) {

            let body = document.getElementsByTagName("body")[0];
            let window_height = body.offsetHeight;
            let client_height = document.documentElement.clientHeight;

            /* The following variables are for storing the neccessary scroll-data */
            let last_known_scroll_position = 0;
            let ticking = false;

            /* This Event-Listener will hook onto the Scroll-Event of the Browser */
            window.addEventListener('scroll', function (e) {

                last_known_scroll_position = window.scrollY;
                if (!ticking) {

                    window.requestAnimationFrame(function () {

                        nowScrolling(last_known_scroll_position);
                        ticking = false;

                    });
                    ticking = true;

                }

            });

            window.addEventListener("resize", refactorScreenHeight);
            var mutationObserver = new MutationObserver(refactorScreenHeight);
            mutationObserver.observe(document.documentElement, {
                attributes: true,
                characterData: true,
                childList: true,
                subtree: true,
                attributeOldValue: true,
                characterDataOldValue: true
            });

            function refactorScreenHeight() {

                client_height = document.documentElement.clientHeight;
                window_height = body.offsetHeight;

            }

            function nowScrolling(last_known_scroll_position) {

                /* Here you also can add your own functions. The following is an example for the Scroll-Bar */
                let percentage = last_known_scroll_position / (window_height - client_height) * 100;
                progressbar.style.right = "calc( 100% - " + Math.round(percentage) + "% )";

            }

        }

    });

})();