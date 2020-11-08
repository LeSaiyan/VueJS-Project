import APIConfig from "../configs/api.configs";

export default {
  methods: {
    //#region helpers
    saveToStore(data, dataName) {
      this.$store.commit("saveToState", {
        data,
        dataName,
      });
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
    diff(arr1, arr2) {
      var ret = [];
      for (var i in arr1) {
        if (arr2.indexOf(arr1[i]) > -1) {
          ret.push(arr1[i]);
        }
      }
      return ret;
    },
    //#endregion

    //#region request for lists movies / tv shows
    async getUpcomingMovies() {
      console.log(process.env.variableName);
      if (this.$store.state.upcomingMovies.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/movie/upcoming?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resJson = await res.json();
        const results = resJson.results.map((item) => ({
          ...item,
          media_type: "movie",
        }));
        this.saveToStore(results, "upcomingMovies");
      }
    },
    async getTrendingAll() {
      if (this.$store.state.trendingAll.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/trending/all/day?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resJson = await res.json();
        this.saveToStore(resJson.results, "trendingAll");
      }
    },
    async getTrendingMovies() {
      if (this.$store.state.trendingMovies.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/trending/movie/day?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resJson = await res.json();
        const results = resJson.results.map((item) => ({
          ...item,
          media_type: "movie",
        }));
        this.saveToStore(results, "trendingMovies");
      }
    },
    async getTrendingTVShows() {
      if (this.$store.state.trendingTVShows.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/trending/tv/day?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resJson = await res.json();
        const results = resJson.results.map((item) => ({
          ...item,
          media_type: "tv",
        }));
        this.saveToStore(results, "trendingTVShows");
      }
    },
    async getPopularMovies() {
      if (this.$store.state.popularMovies.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/movie/popular?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resJson = await res.json();
        const results = resJson.results.map((item) => ({
          ...item,
          media_type: "movie",
        }));
        this.saveToStore(results, "popularMovies");
      }
    },
    async getPopularTVShows() {
      if (this.$store.state.popularTVShows.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/tv/popular?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resJson = await res.json();
        const results = resJson.results.map((item) => ({
          ...item,
          media_type: "tv",
        }));
        this.saveToStore(results, "popularTVShows");
      }
    },

    async getLatestMovie() {
      if (this.$store.state.latestMovie.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/movie/latest?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        let result = [];
        const resJson = await res.json();
        resJson.media_type = "movie";
        result.push(resJson);
        this.saveToStore(result, "latestMovie");
      }
    },

    async getLatestTVShow() {
      if (this.$store.state.latestTVShow.length === 0) {
        const res = await fetch(
          `${APIConfig.apiUrl}/3/tv/latest?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        let result = [];
        const resJson = await res.json();
        resJson.media_type = "tv";
        result.push(resJson);
        this.saveToStore(result, "latestTVShow");
      }
    },
    //#endregion

    //#region search
    async getSearchResults({ search, selectedGenres, selectedContents }) {
      let requestUrl = "";
      if (selectedContents.length !== 1) {
        requestUrl = `${APIConfig.apiUrl}/3/search/multi?api_key=${APIConfig.apiKey}&query=${search}&language=${this.$i18n.locale}`;
      } else {
        requestUrl = `${APIConfig.apiUrl}/3/search/${selectedContents[0]}?api_key=${APIConfig.apiKey}&query=${search}&language=${this.$i18n.locale}`;
      }

      const res = await fetch(requestUrl);
      const resJson = await res.json();
      let results = [];

      //#region filters
      resJson.results.forEach((elem) => {
        if (elem.media_type === "person") {
          elem.known_for.forEach((subElem) => {
            results = [...results, subElem];
          });
        } else {
          results = [...results, elem];
        }
      });
      //#endregion

      if (selectedGenres.length > 0) {
        let tempResults = [];
        results.forEach((elem) => {
          const diffArr = this.diff(elem.genre_ids, selectedGenres);
          if (diffArr.length > 0) {
            tempResults = [...tempResults, elem];
          }
        });
        results = tempResults;
      }

      return results;
    },
    //#endregion

    //#region genres
    async getAllGenres() {
      if (this.$store.state.genres.length === 0) {
        const resMovies = await fetch(
          `${APIConfig.apiUrl}/3/genre/movie/list?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resTVShows = await fetch(
          `${APIConfig.apiUrl}/3/genre/tv/list?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
        );
        const resMoviesJson = await resMovies.json();
        const resTVShowsJson = await resTVShows.json();
        const allGenres = resTVShowsJson.genres.concat(resMoviesJson.genres);
        const allGenresNoDuplicata = allGenres.filter(
          (v, i, a) => a.findIndex((t) => t.id === v.id) === i
        );
        const allGenresSorted = allGenresNoDuplicata.sort(this.sortAsc);
        this.saveToStore(allGenresSorted, "genres");
      }
    },
    //#endregion

    //#region account

    //#endregion

    //#region get movie / tv show by id
    async getItemById(id, media_type) {
      const res = await fetch(
        `${APIConfig.apiUrl}/3/${media_type}/${id}?api_key=${APIConfig.apiKey}&language=${this.$i18n.locale}`
      );
      const resJson = await res.json();
      this.saveToStore(resJson, "itemDetails");
      // return resJson;
    },
    //#endregion

    //#region add fav
    Favorites(item) {
      console.log(item.id, item.title, item.poster_path);
      this.saveToStore(
        { id: item.id, title: item.title, poster: item.poster_path },
        "favorites"
      );
    },
    //#endregion
  },
};
