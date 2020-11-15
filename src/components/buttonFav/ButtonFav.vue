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
  created() {
    this.initFavorites(this.item);
  },
  methods: {
    handleAddFavorites: function (item) {
      this.Favorites(item);
      this.initFavorites(item);
    },
    initFavorites: function (item) {
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
  background-color: green;
  border: 0;
  width: 90%;
  margin: 0px 5%;
}

.checked {
  color: orange;
}
</style>