<template>
  <button class="buttonFav" @click="handleAddFavorites(item)">
    <span :class="`fa fa-star ${checked}`"></span>
  </button>
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
  computed: {
    checked() {
      const favorites = this.$store.state.favorites;
      const index = favorites.findIndex((i) => i.id === this.item.id);
      return index === -1 ? "" : "checked";
    },
  },
  mixins: [ApiMovies],
};
</script>
<style lang="scss" scoped>
.buttonFav {
  background-color: green;
  border: 0;
  width: 90%;
  margin: 0px 5%;
  outline: none;
}

.checked {
  color: orange;
}
</style>