<template>
  <div>
    <ScrollList
      :title="$t('List.PopularTVShows')"
      :list="$store.state.popularTVShows"
    ></ScrollList>
    <ScrollList
      :title="$t('List.TrendingTVShows')"
      :list="$store.state.trendingTVShows"
    ></ScrollList>
  </div>
</template>

<script>
import ApiMovies from "../mixins/ApiMovies";
import ScrollList from "../components/scrollList/ScrollList";

export default {
  mixins: [ApiMovies],
  components: { ScrollList },
  created() {
    this.getPopularTVShows();
    this.getTrendingTVShows();
  },
};
</script>

<style lang="scss" scoped>
</style>