export default {
  state: {
    upcomingMovies: [],
    trendingMovies: [],
    trendingAll: [],
    trendingTVShows: []
  },
  mutations: {
    saveToState(state, { dataName, data }) {
      state[dataName] = data
    }
  },
};
