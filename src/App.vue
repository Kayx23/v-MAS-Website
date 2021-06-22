<template>
  <div id="app">
    <NavBar />
    <Rocket />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Rocket from "./components/Rocket";

export default {
  name: "App",
  components: { NavBar, Rocket },
};
</script> 


<style>
/* google font */
@import "https://fonts.googleapis.com/css2?family=Inter&display=swap";

::selection {
  background: rgb(255, 192, 72);
}

/* Global Style*/
* {
  margin: 0;
  padding: 0;
  overflow: auto; /* do not overflow */
}

html {
  font-size: 62.5%;
  font-family: "Inter", sans-serif;
}

h1 {
  font-size: 2.6rem;
}
li,
button,
label,
input,
p {
  font-size: 1.5rem;
  line-height: 1.5;
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2rem;
  font-weight: normal;
}
h4,
h5 {
  font-size: 1.6rem;
}

/*  progress bar */
#progress-el {
  background-color: rgb(255, 192, 72) !important;
}
</style>