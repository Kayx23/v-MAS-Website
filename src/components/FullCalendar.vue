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
        eventColor: "rgb(121, 0, 60)" /* change colour of all events */,
        googleCalendarApiKey: "AIzaSyDY_VDlCuo1b-w34b7yzzNOwBKzLHHT10M",
        events: {
          googleCalendarId:
            "c_ffut3n6jnpuihuor46d7jp7tng@group.calendar.google.com",
        },
        /* events: [
          {
            title: "IABA & Willis Towers Watson ",
            start: "2020-09-02T18:00:00",
            url: "https://willistowerswatson.recsolu.com/external/events/DdNUJU0G0WWRc9sdolsdGQ?fbclid=IwAR38ddIcdtQsOs5muljs9X_qVCrbe1hJylFL74hCebhnQgz1M3KW0v9XQ2A",
          },
          {
            title: "ASNY Virtual Fair",
            start: "2020-09-13T12:00:00",
            url: "https://asny.memberclicks.net/index.php?option=com_jevents&task=icalrepeat.detail&evid=87&Itemid=132&year=2020&month=09&day=13&title=2020-asny-career-fair-virtual&uid=b01723bb7627489fbb2d12882895fac4&fbclid=IwAR3FavLRCX-87taOu11MJ1ydsoX0CqFqFHX6s-GZvG_Mf5ivkRZ7y_4pVXc",
          },
          {
            title: "Manulife Networking",
            start: "2020-09-09T17:30:00",
          },
          {
            title: "Sun Life Networking",
            start: "2020-09-22T12:00:00",
          },
          {
            title: "Eckler Info Session",
            start: "2020-09-17T17:30:00",
          },
          {
            title: "Desjardins Info Session",
            start: "2020-09-28T15:00:00",
          },
          {
            title: "Canada Life Info Session",
            start: "2020-09-28T17:00:00",
          },
          {
            title: "WTW Meet-the-Team",
            start: "2020-09-29T12:00:00",
          },
          {
            title: "WTW Meet-the-Team",
            start: "2020-10-01T12:00:00",
          },
          {
            title: "Intact Panel",
            start: "2020-09-29T16:00:00",
          },
          {
            title: "Desjardins Virtual Networking",
            start: "2021-02-18T14:00:00",
            url: "https://forms.office.com/Pages/ResponsePage.aspx?id=pSCNckQL3UeUcCDzfL8tmkStfBZuMkdMinHZkr0ksWNUNlBZVjZZOFFRQ01MWllYTE5UQU9JNFFJOS4u&fbclid=IwAR1EnYkN06_JaiiEJ3HMLNRRokNYanOKz8W4WfthKKs7MoYqJqcTQIbGNzg",
          },
          {
            title:
              "McMaster & Co-operators Problem Solving e-Workshop Registration opens",
            start: "2021-02-05",
            url: "https://www.actulab.ca/McMaster-e-piscine.php?fbclid=IwAR2rMy6_mJJGJGcGjE5kWuJRbtBioSWQrpW9CN9w67f3Slin1Gg2Il_Dt9o",
          },
          {
            title: "RSM Canada Winter Networking",
            start: "2021-02-04T14:00:00",
            url: "https://app.smartsheet.com/b/form/7a0dd47081364458afb5c1f447d62ae8?fbclid=IwAR2IcqfMgryibuxdn5yMo5QljEQwgMXHV1aRf1IlPkX1O2xkGPcfd-bSdsY",
          },
          {
            title: "RSM Canada Winter Networking",
            start: "2021-01-17T17:00:00",
            url: "https://www.facebook.com/events/325739288699467/?acontext=%7B%22feed_story_type%22%3A%2222%22%2C%22action_history%22%3A%22null%22%7D&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE1NDAyODA2LCJjYWxsc2l0ZV9pZCI6MzU5MDM2MDAxOTY4NDMyfQ%3D%3D",
          },
          {
            title: "ANÉA-ASNA 2021",
            start: "2021-01-15",
            end: "2021-01-17",
            url: "https://anea-asna.ca/registration/?fbclid=IwAR2fhiqdWshtqR0kXJdu-idaurNYpEhaAhytSEk3EPTpeTaHvaQ59PzuYZ8",
          },
          {
            title:
              "Insurance Institute: Career Connections X TalentEgg Case Competition",
            start: "2020-11-27T14:00:00",
          },
          {
            title: "Career in Insurance Coffee Chat",
            start: "2020-11-24",
          },
          {
            title: "Emerging Risks in Business",
            start: "2020-11-17",
            url: "https://www.eventbrite.com/e/emerging-risks-in-business-perspectives-from-the-insurance-industry-tickets-127477052295",
          },
        ], */
      },
    };
  },
};
</script>