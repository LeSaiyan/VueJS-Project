export default {
  state: {
    upcomingMovies: [],
    trendingMovies: [],
    trendingAll: [],
    trendingTVShows: [],
    popularMovies: [],
    popularTVShows: [],
    genres: [],
    latestMovie: [],
    latestTVShow: [],
  },
  mutations: {
    saveToState(state, { dataName, data }) {
      state[dataName] = data;
    },
  },
};
