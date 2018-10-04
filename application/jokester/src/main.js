import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

// Challenges:
// Add a new type to the application by submitting a few jokes with a different type to the api.
