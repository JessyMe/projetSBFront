<template>
    <v-container>
        <v-form @submit="submitForm" ref="form" novalidate>
          <v-row>
            <v-text-field label="Email" rounded color="primary" outlined type="email" v-model="form.email"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field  type="password" label="Mot de passe" v-model.lazy="form.password" outlined rounded color="primary"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field  type="text" label="Pseudo" v-model.lazy="form.username" outlined rounded color="primary"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field  type="text" label="Prénom" v-model.lazy="form.name" outlined rounded color="primary"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field type="text" label="Nom" v-model.lazy="form.surname" outlined rounded color="primary"></v-text-field>
          </v-row>
          <v-alert colored-border border="bottom" type= "warning" elevation="2" v-if="errors.length > 0">
          <ul class="font-italic" >
            Oups !
            <ol v-for="error in errors" :key="error">{{error}}</ol>
          </ul>
          </v-alert>
          <v-alert dense border="left" type="error" v-if="errors.length > 2">
          <ul class="font-italic" >
             Echec !
            <ol v-for="error in errors" :key="error">{{error}}</ol>
          </ul>
          </v-alert>
          <v-alert dense border="left" type="info" v-if="registered === true">
          <ul class="font-italic" >
             Bienvenue {{username}} !
            <ol v-for="error in errors" :key="error">{{error}}</ol>
          </ul>
          </v-alert>
          <v-row>
          <v-btn type="submit" color="orange lighten-2">Submit</v-btn>
          <v-btn type= "reset" color="grey lighten-1" @click="reset">Cancel</v-btn>
          </v-row>
        </v-form>
    </v-container>
</template>

<script>
import api from '../../plugins/api/api.js'
const urlApi = process.env.VUE_APP_BASE_URL_API

export default ({
  name: 'user-register-form',
  data () {
    return {
      form: {
        email: '',
        password: '',
        username: '',
        name: '',
        surname: ''
      },
      errors: [],
      registered: false,
      apiErrors: ''
    }
  },
  methods: {
    validEmail () {
      const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.form.email && !emailregex.test(this.form.email)) {
        this.errors.push('L\'email ne correspond pas au format demandé')
      }
    },
    validPassword () {
      const passwordregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
      if (this.form.password && !passwordregex.test(this.form.password)) {
        this.errors.push('Le mot de passe ne correspond pas au format demandé : minimum 8 caractères, une majuscule, une minuscule, un nombre et un caractère spécial')
      }
    },
    validUsername () {

    },
    validTextField () {
      if (this.form.email && this.form.password && this.form.username && this.form.surname && this.form.name) {
      } else {
        this.errors.push('Tous les champs doivent être renseignés')
      }
    },
    validForm () {
      this.errors = []
      this.validTextField()
      this.validEmail()
      this.validPassword()
    },
    submitForm (e) {
      e.preventDefault()
      this.validForm()
      if (this.errors.length === 0) {
        api.post(urlApi + '/users', {...this.form})
          .then(response => console.log(response))
          .catch(error => this.handleApiErrorMessage(error.response.data))
      }
      console.log(this.errors)
      console.log(this.apiErrors)
    },
    reset () {
      this.errors = []
    },
    handleApiErrorMessage (error) {
      console.log('je suis dans handleApi')
      console.log(error)
    }
  }
})

</script>

<style scoped>
</style>
