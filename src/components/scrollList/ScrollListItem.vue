<template>
  <div class="container">
    <img
      v-if="item.backdrop_path"
      :src="`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`"
    />
    <div v-else class="no-img">no img</div>
    <h3 class="content-title">{{ item.name || item.title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss">
.container {
  width: 150px;
  img {
    width: 150px;
  }
  margin: auto;
  .no-img {
    height: 330px;
  }
  .content-title {
    color: #e5e5e5;
  }
}
</style>