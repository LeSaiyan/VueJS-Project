<template>
  <div class="header">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/New">New</router-link>
      <router-link to="/WishList">WishList</router-link>
      <router-link to="/Search">Search</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
