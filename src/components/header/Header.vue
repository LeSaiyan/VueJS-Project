<template>
  <div class="header">
    <div id="nav">
      <router-link to="/">{{ $t("Home") }}</router-link> -
      <router-link to="/TvShows">{{ $t("TvShows") }}</router-link> -
      <router-link to="/Movies">{{ $t("Movies") }}</router-link> -
      <router-link to="/Latest">{{ $t("Latest") }}</router-link> -
      <router-link to="/WishList">{{ $t("My List") }}</router-link> -
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>

<i18n>
{
  "en": {
    "Home": "Home",
    "TvShows": "TV Shows",
    "Movies": "Movies",
    "Latest": "Latest",
    "My List": "My List"
  },
  "fr": {
    "Home": "Accueil",
    "TvShows": "Séries",
    "Movies": "Films",
    "Latest": "Nouveautés",
    "My List": "Ma liste"
  }
}
</i18n>

<style scoped lang="scss">
</style>