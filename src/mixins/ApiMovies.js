import APIConfig from "../configs/api.configs";

export default {
  methods: {
    getLatestMovies() {
      return fetch(
        APIConfig.apiUrl +
        "/3/movie/upcoming?api_key=" +
        APIConfig.apiKey +
        "&language=en-US"
      ).then((res) => res.json());
    },
  },
};