<template>
  <div>
    <ScrollList
      :title="$t('List.LatestMovie')"
      :list="$store.state.latestMovie"
    ></ScrollList>
    <ScrollList
      :title="$t('List.LatestTVShow')"
      :list="$store.state.latestTVShow"
    ></ScrollList>
    <ScrollList
      :title="$t('List.UpcomingMovies')"
      :list="$store.state.upcomingMovies"
    ></ScrollList>
    <ScrollList
      :title="$t('List.Trending')"
      :list="$store.state.trendingAll"
    ></ScrollList>
    <ScrollList
      :title="$t('List.TrendingTVShows')"
      :list="$store.state.trendingTVShows"
    ></ScrollList>
    <ScrollList
      :title="$t('List.TrendingMovies')"
      :list="$store.state.trendingMovies"
    ></ScrollList>
    <ScrollList
      :title="$t('List.PopularTVShows')"
      :list="$store.state.popularTVShows"
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
    this.getLatestMovie();
    this.getLatestTVShow();
    this.getUpcomingMovies();
    this.getTrendingAll();
    this.getTrendingMovies();
    this.getTrendingTVShows();
    this.getPopularMovies();
    this.getPopularTVShows();
  },
  mixins: [ApiMovies],
};
</script>

<style lang="scss" scoped>
</style>