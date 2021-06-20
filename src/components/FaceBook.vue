<template>
  <div id="social-media">
    <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMcMasterActuarialSociety&tabs=timeline&width=320&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=757159821787658"
      width="320"
      height="650"
      style="border: none; overflow: hidden"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  </div>
</template>
 
<script>
export default {
  name: "FaceBook",
};
</script>

<style scoped>
.calendar-social-media #social-media {
  /* the width and height is set in html */
  overflow: visible; /* prevent the view to get cut off since it doesn't resize */
  flex: 1;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 900px) {
  .calendar-social-media {
    display: flex;
    flex-direction: column;
  }
  #calendar {
    max-width: 95%;
    margin: 1.5rem auto;
    font-size: 1.5rem;
    padding: 2%;
    font-size: small;
  }
  #events {
    padding: 2.5rem 1rem;
  }
}
</style>