<template>
  <ion-icon name="rocket" button="true" id="scrolltop"></ion-icon>
</template> 

<script>
import $ from "jquery";

export default {
  name: "Rocket",
  created() {
    /* show icon only scrolling past a portion of the screen */
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("#scrolltop:hidden").stop(true, true).fadeIn();
      } else {
        $("#scrolltop").stop(true, true).fadeOut();
      }
    });

    /* goes to the top */
    $(function () {
      $("#scrolltop").click(function () {
        $("html, body").animate(
          {
            scrollTop: $("#top").offset().top,
          },
          "1000"
        );
        return false;
      });
    });
  },
};
</script>

<style scoped>
#scrolltop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(255, 192, 72, 0.5);
  padding: 0.7rem;
  display: none;
  z-index: 100;
}

#scrolltop:hover {
  background-color: rgb(255, 192, 72);
}
</style>