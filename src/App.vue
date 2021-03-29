<template>
  <div id="app">
    <v-app>
      <v-main>
        <the-header></the-header>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
</style>
