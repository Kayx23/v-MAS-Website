<template>
  <div>
    <HeroMTT />
    <Team />
    <Footer />
  </div>
</template>

<script>
import HeroMTT from "@/components/HeroMTT";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default {
  name: "mtt",
  components: { HeroMTT, Team, Footer },
};
</script>
