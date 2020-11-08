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
    itemDetails: [],
    favorites: [],
  },
  mutations: {
    saveToState(state, { dataName, data }) {
      state[dataName] = data;
    },
  },
};
