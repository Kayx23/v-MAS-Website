<template>
  <div id="app">
    <NavBar />
    <router-view />
    <!-- <Home /> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
/* import Home from "./views/home";
import mtt from "./views/mtt"; */

export default {
  name: "App",
  components: { NavBar },
};
</script>