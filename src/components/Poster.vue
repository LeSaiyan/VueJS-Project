<template>
  <img
    v-if="poster_path"
    :src="`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`"
  />
  <img v-else src="@/assets/img/no-content.png" />
</template>

<script>
export default {
  props: {
    poster_path: String,
  },
};
</script>

<style lang="scss" scoped>
.no-img {
  height: 330px;
}
img {
  width: 150px;
}
</style>