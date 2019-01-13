<template>
  <div id="app">
    <headers></headers>
    <router-view></router-view>
    <fooder></fooder>
  </div>
</template>

<script>
import headers from "./components/Header";
import fooder from "./components/Fooder";
export default {
  name: "App",
  components: {
    headers,
    fooder
  }
};
</script>

<style lang="scss" scoped>
#app {
}
</style>

