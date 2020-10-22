<template>
  <div>
    <p>New movie</p>
  </div>
</template>

<script>
import ApiMovies from "../mixins/ApiMovies";

export default {
  name: "New",
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