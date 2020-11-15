<template>
  <div class="search">
    <div class="search-bar">
      <div>
        <p>{{ $t("Search") }}</p>
        <input ref="searchInput" v-model="search" :placeholder="$t('Search')" />
      </div>
      <div>
        <p>{{ $t("List.Genres") }}</p>
        <select multiple="true" v-model="selectedGenres">
          <option
            v-for="item in $store.state.genres"
            :key="item.index"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
      </div>

      <div class="custom-select" :tabindex="tabindex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
          {{ selected }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
          <div
            v-for="(option, i) of options"
            :key="i"
            @click="
              selected = option;
              open = false;
              $emit('input', option);
            "
          >
            {{ option }}
          </div>
        </div>
      </div>

      <div>
        <p>{{ $t("List.TypeOfContents") }}</p>
        <select multiple="true" v-model="selectedContents">
          <option value="tv">{{ $t("TVShows") }}</option>
          <option value="movie">{{ $t("Movies") }}</option>
        </select>
      </div>
    </div>
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
    selectedGenres: [],
    selectedContents: [],
    search: "",
  }),
  components: { SearchList },
  mixins: [ApiMovies],
  methods: {
    async refreshSearchResults() {
      if (this.search === "") this.searchResults = [];
      else {
        this.searchResults = await this.getSearchResults({
          search: this.search,
          selectedGenres: this.selectedGenres,
          selectedContents: this.selectedContents,
        });
      }
    },
  },
  watch: {
    search: function () {
      this.refreshSearchResults();
    },
    selectedGenres: function () {
      this.refreshSearchResults();
    },
    selectedContents: function () {
      this.refreshSearchResults();
    },
  },
  mounted() {
    this.$refs.searchInput.focus();
  },
  created() {
    this.getAllGenres();
  },
};
</script>

<style lang="scss" scoped>
.search {
  padding: 2.5%;
  .search-bar {
    display: flex;
    justify-content: space-around;
    padding-bottom: 2.5%;
  }
  input {
    margin: 2.5% 0;
    border: 0;
    color: rgb(229, 229, 229);
    background-color: transparent;
    outline: none;
  }
}
</style>