<template>
  <button class="buttonFav" @click="handleAddFavorites(item)">
    <span :class="classObject"></span>
  </button>
</template>

<script>
import ApiMovies from "../../mixins/ApiMovies";

export default {
  data: () => ({
    classObject: {
      fa: "fa",
      "fa-star": "fa-star",
      checked: "",
    },
  }),
  props: {
    item: Object,
  },
  methods: {
    handleAddFavorites: function (item) {
      this.Favorites(item);
      console.log(this.$store.state.favorites);
      let favorites = this.$store.state.favorites;
      let index = favorites.findIndex((i) => i.id === item.id);
      if (index === -1) {
        this.classObject.checked = "";
      } else if (index > -1) {
        this.classObject.checked = "checked";
      }
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