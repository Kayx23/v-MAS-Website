<template>
  <FullCalendar :options="calendarOptions" />
</template>

<style>
/* wrapping time and title */
.fc-event-time,
.fc-event-title {
  padding: 0 1px;
  white-space: normal;
}
</style>

<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

export default {
  components: {
    FullCalendar, // name
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, googleCalendarPlugin],
        initialView: "dayGridMonth",
        dayMaxEvents: true, // dynamically changes to +n events
        contentHeight: 590, // adjust to align with fb page
        eventDisplay: "block", // don't want dots
        headerToolbar: {
          left: "today",
          center: "title",
          right: "prev,next",
        },
        eventColor: "rgb(121, 0, 60)",
        googleCalendarApiKey: `${VUE_APP_GOOGLE_API}`,
        events: {
          googleCalendarId:
            "c_ffut3n6jnpuihuor46d7jp7tng@group.calendar.google.com",
        },
      },
    };
  },
};
</script>