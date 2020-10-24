import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import Movie from "./store/movie";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faGift, faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import i18n from './i18n'

//#region font-awesome
library.add(faBell, faGift, faSearch, faSortDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)
//#endregion

//#region Vuex 
Vue.use(Vuex);
const store = new Vuex.Store(Movie);
//#endregion

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  i18n,
  store: store
}).$mount("#app");
