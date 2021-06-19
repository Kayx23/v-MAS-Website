<template>
  <div id="progressbar"></div>
</template>

<script>
export default {
  name: "ProgressBar",
};
</script>

<style scoped>
#progressbar {
  position: fixed;
  height: 6px;
  z-index: 10;

  top: 0;
  left: 0;
  right: calc(100%);

  background-color: rgb(255, 192, 72);

  transition: right 0.3s linear 0s;
}
</style>