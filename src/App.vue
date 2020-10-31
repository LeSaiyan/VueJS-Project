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
  color: #e5e5e5;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
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
