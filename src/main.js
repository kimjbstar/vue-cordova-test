import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


Vue.mixin({
  methods: {
    capitalizeFirstLetter: str => str.charAt(0).toUpperCase() + str.slice(1)
  }
})
// 이거보다 플러그인으로 https://kr.vuejs.org/v2/guide/plugins.html

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')