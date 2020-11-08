<template>
  <button class="buttonFav" @click="handleAddFavorites(item)">Add</button>
</template>

<script>
import ApiMovies from "../../configs/api.configs";

export default {
  props: {
    item: Object,
  },
  methods: {
    handleAddFavorites: function (item) {
      this.Favorites(item);
      //   console.log(item.id, item.title, item.poster_path);
    },
  },
  mixins: [ApiMovies],
};
</script>
<style lang="scss" scoped>
.buttonFav {
  background-color: pink;
}
</style>