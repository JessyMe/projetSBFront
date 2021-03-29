import Vue from 'vue'
import Router from 'vue-router'
import UserRegisterForm from '../components/User/UserRegisterForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      props: true,
      name: 'user-register-form',
      component: UserRegisterForm

    }
  ]
})
