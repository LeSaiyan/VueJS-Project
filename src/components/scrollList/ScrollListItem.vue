<template>
  <img
    v-if="item.backdrop_path"
    :src="`https://image.tmdb.org/t/p/w200${item.backdrop_path}`"
  />
  <h2 v-else-if="item.original_title">{{ item.original_title }}</h2>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss">
</style>