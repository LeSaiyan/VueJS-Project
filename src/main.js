import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import Movie from "./store/movie";
import VueI18n from 'vue-i18n'

Vue.use(Vuex);
const store = new Vuex.Store(Movie);

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  i18n,
  store: store
}).$mount("#app");
