import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import Movie from "./store/movie";
import VueI18n from 'vue-i18n';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faGift, faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//#region font-awesome
library.add(faBell, faGift, faSearch, faSortDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)
//#endregion

//#region Vuex 
Vue.use(Vuex);
const store = new Vuex.Store(Movie);
//#endregion

//#region Localization
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
})
//#endregion

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  i18n,
  store: store
}).$mount("#app");
