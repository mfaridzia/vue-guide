import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { firebaseApp } from './firebase.js'

Vue.config.productionTip = false

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    store.dispatch('signIn', user)
    router.push('/dashboard')
  } else {
    router.replace('/signin')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
