import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import 'vue-material-design-icons/styles.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyBxL5qoz1jPj-Gi2qwzqnpGS6d3R9yqGS0",
      authDomain: "vue-project-96e22.firebaseapp.com",
      databaseURL: "https://vue-project-96e22.firebaseio.com",
      projectId: "vue-project-96e22",
      storageBucket: "vue-project-96e22.appspot.com",
      messagingSenderId: "180380121378",
      appId: "1:180380121378:web:28a0790f9b32be83"
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
