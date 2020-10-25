<template>
  <div>
    <ScrollList
      :title="$t('List.UpcomingMovies')"
      :list="$store.state.upcomingMovies"
    ></ScrollList>
    <ScrollList
      :title="$t('List.TrendingMovies')"
      :list="$store.state.trendingMovies"
    ></ScrollList>
    <ScrollList
      :title="$t('List.PopularMovies')"
      :list="$store.state.popularMovies"
    ></ScrollList>
  </div>
</template>

<script>
import ApiMovies from "../mixins/ApiMovies";
import ScrollList from "../components/scrollList/ScrollList";

export default {
  components: { ScrollList },
  created() {
    this.getUpcomingMovies();
    this.getTrendingMovies();
    this.getPopularMovies();
  },
  mixins: [ApiMovies],
};
</script>

<style lang="scss" scoped>
</style>