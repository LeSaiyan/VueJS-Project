import APIConfig from "../configs/api.configs";

export default {
  methods: {
    saveToStore(data, dataName) {
      this.$store.commit("saveToState", {
        data,
        dataName
      })
    },
    //#region request for movies / tv shows
    async getUpcomingMovies() {
      if (this.$store.state.upcomingMovies.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/movie/upcoming?api_key=${APIConfig.apiKey}&language=en-US`
        );
        const resJson = await res.json();
        this.saveToStore(resJson.results, "upcomingMovies")
      }
    },
    async getTrendingAll() {
      if (this.$store.state.trendingAll.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/trending/all/day?api_key=${APIConfig.apiKey}&language=en-US`
        );
        const resJson = await res.json();
        this.saveToStore(resJson.results, "trendingAll")
      }
    },
    async getTrendingMovies() {
      if (this.$store.state.trendingMovies.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/trending/movie/day?api_key=${APIConfig.apiKey}&language=en-US`
        );
        const resJson = await res.json();
        this.saveToStore(resJson.results, "trendingMovies")
      }
    },
    async getTrendingTVShows() {
      if (this.$store.state.trendingTVShows.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/trending/tv/day?api_key=${APIConfig.apiKey}&language=en-US`
        );
        const resJson = await res.json();
        this.saveToStore(resJson.results, "trendingTVShows")
      }
    },
    //#endregion
  },
};