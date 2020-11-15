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
  border-radius: 20px;
  background-color: green;
  border: 0;
}

.checked {
  color: orange;
}
</style>