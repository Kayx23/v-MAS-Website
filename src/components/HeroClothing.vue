/* meet the team hero */
<template>
  <section class="hero">
    <header>
      <h1>McMaster Actuarial Society</h1>
    </header>
  </section>
</template>

<script>
export default {
  name: "HeroClothing",
};
</script>

<style scoped>
.hero {
  background: url(../assets/images/HH.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 30vh;
  display: flex;
  align-items: center; /* centering MAS */
  justify-content: center;
}
.hero h1 {
  color: white;
  font-size: 5rem;
  text-shadow: 2px 2px 2px black;
  text-align: center;
}
</style>