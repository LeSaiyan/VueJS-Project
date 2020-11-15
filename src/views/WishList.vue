<template>
  <div>
    <ScrollList
      v-if="$store.state.favorites.length > 0"
      :title="$t('List.Favorites')"
      :list="$store.state.favorites"
    ></ScrollList>
    <div v-else class="fav">
      <p>{{ $t("List.NoFavorites") }}</p>
    </div>
  </div>
</template>

<script>
import ScrollList from "../components/scrollList/ScrollList";

export default {
  components: { ScrollList },
  name: "WishList",
};
</script>

<style lang="scss" scoped>
.fav {
  text-align: center;
}
</style>