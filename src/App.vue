<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style lang="scss">
body,
html {
  background: #141414;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<script>
import Header from "../src/components/header/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>>
