import Vue from 'vue'
import Router from 'vue-router'
import RegisterForm from '../components/User/UserRegisterForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: RegisterForm
    }
  ]
})
