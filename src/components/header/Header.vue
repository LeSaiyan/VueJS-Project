<template>
  <div class="header">
    <div id="nav">
      <HeaderLinks></HeaderLinks>
      <HeaderActions></HeaderActions>
    </div>
  </div>
</template>

<script>
import HeaderLinks from "./HeaderLinks";
import HeaderActions from "./HeaderActions";

export default {
  components: { HeaderLinks, HeaderActions },
};
</script>

<style scoped lang="scss">
#nav {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
}
</style>