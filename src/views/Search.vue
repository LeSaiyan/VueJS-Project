<template>
  <div class="search">
    <input v-model="search" :placeholder="$t('Search')" />
    <SearchList :list="searchResults"></SearchList>
  </div>
</template>

<script>
import SearchList from "../components/searchList/SearchList";
import ApiMovies from "../mixins/ApiMovies";

export default {
  name: "Search",
  data: () => ({
    searchResults: [],
    search: "",
    isRequestingSearch: false,
  }),
  components: { SearchList },
  mixins: [ApiMovies],
  watch: {
    search: function (val, oldVal) {
      if (this.isRequestingSearch) this.isRequestingSearch = false;
      setTimeout(() => {
        this.isRequestingSearch = true;
      }, 1000);
    },
    isRequestingSearch: async function (val, oldVal) {
      if (val && this.search !== "") {
        this.searchResults = await this.getSearchResults(this.search);
      } else if (val && this.search === "") {
        this.searchResults = [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  padding: 2.5%;
  input {
    margin: 2.5% 0;
  }
}
</style>