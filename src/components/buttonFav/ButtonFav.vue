<template>
  <button class="buttonFav" @click="handleAddFavorites(item)">Add</button>
</template>

<script>
import ApiMovies from "../../mixins/ApiMovies";

export default {
  props: {
    item: Object,
  },
  methods: {
    handleAddFavorites: function (item) {
      this.Favorites(item);
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