<template>
  <div>
    <p>Latest</p>
  </div>
</template>

<script>
import ApiMovies from "../mixins/ApiMovies";

export default {
  name: "Latest",
  data: function () {
    return {
      dataMovie: [],
    };
  },
  created() {
    this.getLatestMovies().then((data) => {
      this.dataMovie = data;
      console.log(data.results);
    });
  },
  mixins: [ApiMovies],
};
</script>

<style lang="scss" scoped>
</style>