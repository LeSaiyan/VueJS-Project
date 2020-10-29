<template>
  <div class="HeaderLinks">
    <router-link to="/">
      <img src="@/assets/img/netflix.png" />
    </router-link>
    <router-link to="/">{{ $t("Home") }}</router-link>
    <router-link to="/TvShows">{{ $t("TvShows") }}</router-link>
    <router-link to="/Movies">{{ $t("Movies") }}</router-link>
    <router-link to="/Latest">{{ $t("Latest") }}</router-link>
    <router-link to="/WishList">{{ $t("My List") }}</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderLinks",
};
</script>

<style lang="scss" scoped>
img {
  width: 92.5px;
  height: 25.5px;
  padding-right: 25px;
}

a {
  margin-left: 20px;
  font-weight: bold;
  color: #e5e5e5;
  text-decoration: none;
  font: 14px;
  &.router-link-exact-active {
    color: #fff;
  }
}
</style>

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