import Vue from 'vue'
import Vuelidate from "vuelidate"
import VueMeta from 'vue-meta'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from "./filters/currency.filter"
import localizeFilter from "./filters/localize.filter"
import tooltipDirective from './directives/tooltip.directive'
import messagePlugin from './utils/message.plugin'
import titlePlugin from './utils/title.plugin'
import Loader from './components/app/Loader'
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBXy_rZuGrr5v773VWq8oxryW5QiPgFO2s",
  authDomain: "home-bookkeeping-ff877.firebaseapp.com",
  databaseURL: "https://home-bookkeeping-ff877.firebaseio.com",
  projectId: "home-bookkeeping-ff877",
  storageBucket: "home-bookkeeping-ff877.appspot.com",
  messagingSenderId: "679177081656",
  appId: "1:679177081656:web:1bbb462765dc90b57c27cd",
  measurementId: "G-P56HB5XNVR"
})


let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


