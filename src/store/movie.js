export default {
  state: {
    upcomingMovies: [],
    trendingMovies: [],
    trendingAll: [],
    trendingTVShows: [],
    popularMovies: [],
    popularTVShows: [],
    genres: [],
  },
  mutations: {
    saveToState(state, { dataName, data }) {
      state[dataName] = data
    }
  },
};