<template>
  <section id="events">
    <h2>Upcoming Events</h2>

    <div class="calendar-social-media">
      <!-- need two divs wrapping the elements in mobile view -->
      <!-- cannot have the wrapper div for calender in wide screen -->
      <dir v-if="$windowWidth > 950" id="calendar"><FullCalendar /></dir>
      <div v-else>
        <dir id="calendar"><FullCalendar /></dir>
      </div>
      <dir><FaceBook /></dir>
    </div>
  </section>
</template>

<script>
import FullCalendar from "./FullCalendar";
import FaceBook from "./FaceBook";

export default {
  name: "Events",
  components: { FullCalendar, FaceBook },
};
</script>

<style scoped>
h2 {
  margin-bottom: 4rem;
}

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
  margin: 0rem auto;
  font-size: 1.5rem;
  padding: 10px 2%; /* 10px to align with fb page */
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

@media screen and (max-width: 950px) {
  .calendar-social-media {
    display: flex;
    flex-direction: column;
  }

  #calendar {
    max-width: 95%;
    margin: 1rem auto;
    font-size: 1.5rem;
    padding: 2%;
    font-size: small;
  }
  #events {
    padding: 2.5rem 1rem;
  }
}
</style>