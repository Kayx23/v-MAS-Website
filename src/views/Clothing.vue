<template>
  <div>
    <HeroClothing />
    <Clothing />
    <Footer />
  </div>
</template>

<script>
import HeroClothing from "../components/HeroClothing";
import Clothing from "../components/Clothing";
import Footer from "../components/Footer";

export default {
  name: "Clothing_view",
  components: { HeroClothing, Clothing, Footer },
};
</script>