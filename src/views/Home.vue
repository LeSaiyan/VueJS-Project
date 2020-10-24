<template>
  <div>
    <ScrollList
      :title="$t('List.New')"
      :list="$store.state.upcomingMovies"
    ></ScrollList>
    <ScrollList
      :title="$t('List.Trending')"
      :list="$store.state.trendingAll"
    ></ScrollList
    ><ScrollList
      :title="$t('List.TrendingTVShows')"
      :list="$store.state.trendingTVShows"
    ></ScrollList
    ><ScrollList
      :title="$t('List.TrendingMovies')"
      :list="$store.state.trendingMovies"
    ></ScrollList>
  </div>
</template>

<script>
import ApiMovies from "../mixins/ApiMovies";
import ScrollList from "../components/scrollList/ScrollList";

export default {
  components: { ScrollList },
  data: () => ({}),
  created() {
    this.getUpcomingMovies();
    this.getTrendingAll();
    this.getTrendingMovies();
    this.getTrendingTVShows();
  },
  mixins: [ApiMovies],
};
</script>

<style lang="scss" scoped>
</style>