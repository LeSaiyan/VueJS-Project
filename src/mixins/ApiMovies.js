import APIConfig from "../configs/api.configs";

export default {
  methods: {
    //#region helpers
    saveToStore(data, dataName) {
      this.$store.commit("saveToState", {
        data,
        dataName
      })
    },
    sortAsc(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    },
    //#endregion

    //#region request for lists movies / tv shows
    async getUpcomingMovies() {
      if (this.$store.state.upcomingMovies.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/movie/upcoming?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resJson = await res.json();
        this.saveToStore(resJson.results, "upcomingMovies")
      }
    },
    async getTrendingAll() {
      if (this.$store.state.trendingAll.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/trending/all/day?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resJson = await res.json();
        this.saveToStore(resJson.results, "trendingAll")
      }
    },
    async getTrendingMovies() {
      if (this.$store.state.trendingMovies.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/trending/movie/day?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resJson = await res.json();
        this.saveToStore(resJson.results, "trendingMovies")
      }
    },
    async getTrendingTVShows() {
      if (this.$store.state.trendingTVShows.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/trending/tv/day?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resJson = await res.json();
        this.saveToStore(resJson.results, "trendingTVShows")
      }
    },
    async getPopularMovies() {
      if (this.$store.state.popularMovies.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/movie/popular?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resJson = await res.json();
        this.saveToStore(resJson.results, "popularMovies")
      }
    },
    async getPopularTVShows() {
      if (this.$store.state.popularTVShows.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/tv/popular?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resJson = await res.json();
        this.saveToStore(resJson.results, "popularTVShows")
      }
    },
    //#endregion

    //#region search
    async getSearchResults(
      { search, selectedGenres, selectedContents }) {

      let requestUrl = "";
      if (selectedContents.length !== 1) {
        // All
        requestUrl = `${APIConfig.apiUrl}/3/search/multi?api_key=${APIConfig.apiKey}&query=${search}&language=${this.$i18n.locale}`
      } else {
        requestUrl = `${APIConfig.apiUrl}/3/search/${selectedContents[0]}?api_key=${APIConfig.apiKey}&query=${search}&language=${this.$i18n.locale}`
      }

      const res = await fetch(requestUrl);
      const resJson = await res.json();
      let results = []

      //#region filters 
      resJson.results.forEach(elem => {
        if (elem.media_type === "person") {
          elem.known_for.forEach(subElem => {
            results = [...results, subElem]
          })
        } else {
          results = [...results, elem]
        }
      })
      //#endregion

      return results
    },
    //#endregion

    //#region genres
    async getAllGenres() {
      if (this.$store.state.genres.length === 0) {
        const resMovies = await fetch(
          `${APIConfig.apiUrl}/3/genre/movie/list?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        )
        const resTVShows = await fetch(
          `${APIConfig.apiUrl}/3/genre/tv/list?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        )
        const resMoviesJson = await resMovies.json();
        const resTVShowsJson = await resTVShows.json();
        const allGenres = resTVShowsJson.genres
          .concat(resMoviesJson.genres)
        const allGenresNoDuplicata = allGenres.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)
        const allGenresSorted = allGenresNoDuplicata.sort(this.sortAsc);
        this.saveToStore(allGenresSorted, "genres")
      }
    },
    //#endregion
  },
};