<template>
  <section id="events">
    <h2>Upcoming Events</h2>
    <div class="calendar-social-media">
      <div id="calendar"></div>
      <div id="social-media">
        <div
          class="fb-page"
          data-href="https://www.facebook.com/McMasterActuarialSociety/"
          data-tabs="timeline"
          data-width="320"
          data-height="650"
          data-small-header="false"
          data-adapt-container-width="false"
          data-hide-cover="false"
          data-show-facepile="false"
        >
          <blockquote
            cite="https://www.facebook.com/McMasterActuarialSociety/"
            class="fb-xfbml-parse-ignore"
          ></blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Events",
};
</script>

<style scoped>
/* events */

#events {
  text-align: center;
  padding: 5rem;
}

.calendar-social-media {
  display: flex;
}

#calendar {
  flex: 4;
  max-width: 70%;
  margin: 1.5rem auto;
  font-size: 1.5rem;
  padding: 2%;
}

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

.fc-day-grid-event > .fc-content {
  white-space: normal;
}
</style>