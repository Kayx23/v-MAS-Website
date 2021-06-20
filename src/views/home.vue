<template>
  <div>
    <Hero />
    <Resources />
    <Events />
    <Footer />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Resources from "../components/Resources";
import Events from "../components/Events";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: { Hero, Resources, Events, Footer },
};
</script>