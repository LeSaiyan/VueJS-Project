<template>
  <img :src="`https://image.tmdb.org/t/p/w200${item.backdrop_path}`" />
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