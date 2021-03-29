<template>
  <div id="app">
    <the-header></the-header>
    <div>
      <user-register-form></user-register-form>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import UserRegisterForm from './components/User/UserRegisterForm.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    UserRegisterForm
  }
}
</script>

<style>
</style>
