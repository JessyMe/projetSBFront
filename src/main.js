// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify/vuetify.js' // path to vuetify export
import api from './plugins/api/api.js'
import 'es6-promise/auto'

Vue.config.productionTip = false
Vue.prototype.$http = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: {App},
  template: '<App/>'
})
