<template>
  <div id="app">
    <NavBar />
    <Hero />
    <Resources />
    <Events />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Resources from "./components/Resources";
import Events from "./components/Events";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: { NavBar, Hero, Resources, Events, Footer },
};
</script>

<style>
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
</style>
