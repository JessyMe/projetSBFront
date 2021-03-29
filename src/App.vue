<template>
  <div id="app">
    <v-app>
      <v-main>
        <the-header></the-header>
        <user-register-form></user-register-form>
      </v-main>
    </v-app>
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
