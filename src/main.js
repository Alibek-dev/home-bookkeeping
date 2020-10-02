import Vue from 'vue'
import Vuelidate from "vuelidate";
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.filter('date', dateFilter)
Vue.use(Vuelidate)
Vue.use(messagePlugin)

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


