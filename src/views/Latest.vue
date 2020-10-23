<template>
  <div>
    <ScrollList
      v-if="dataMovie.length > 0"
      :title="$t('New')"
      :list="dataMovie"
    ></ScrollList>
  </div>
</template>

<script>
import ApiMovies from "../mixins/ApiMovies";
import ScrollList from "../components/scrollList/ScrollList";

export default {
  name: "Latest",
  components: { ScrollList },
  data: function () {
    return {
      dataMovie: [],
    };
  },
  created() {
    this.getLatestMovies().then((data) => {
      this.dataMovie = data.results;
    });
  },
  mixins: [ApiMovies],
};
</script>

<style lang="scss" scoped>
</style>

<i18n>
{
  "en": {
    "New": "Newest"
  },
  "fr": {
    "New": "Nouveautés"
  }
}
</i18n>