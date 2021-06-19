<template>
  <ion-icon name="rocket" button="true" id="scrolltop"></ion-icon>
</template>

<script>
export default {
  name: "Rocket",
};
</script>

<style scoped>
#scrolltop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(255, 192, 72, 0.5);
  padding: 0.7rem;
  display: none;
  z-index: 100;
}

#scrolltop:hover {
  background-color: rgb(255, 192, 72);
}
</style>