<template>
    <v-container fluid>
        <v-form @submit="submitForm" ref="form" novalidate>
          <v-container fluid>
            <v-text-field label="Email" rounded color="primary" outlined type="email" v-model="form.email"></v-text-field>
          </v-container>
          <v-container fluid>
            <v-text-field  type="password" label="Mot de passe" v-model.lazy="form.password" outlined rounded color="primary"></v-text-field>
          </v-container>
          <v-container fluid>
            <v-text-field  type="text" label="Pseudo" v-model.lazy="form.username" outlined rounded color="primary"></v-text-field>
          </v-container>
          <v-container fluid>
            <v-text-field  type="text" label="Prénom" v-model.lazy="form.name" outlined rounded color="primary"></v-text-field>
          </v-container>
          <v-container fluid>
            <v-text-field type="text" label="Nom" v-model.lazy="form.surname" outlined rounded color="primary"></v-text-field>
          </v-container>
          <v-container fluid>
          <v-btn type="submit" color="orange">Submit</v-btn>
          <v-btn color="grey">Cancel</v-btn>
          </v-container>
        </v-form>
        <pre>{{$data.form}}</pre>
    </v-container>
</template>

<script>
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
      errors: []
    }
  },
  methods: {
    validEmail () {
      const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.form.email && !emailregex.test(this.form.email)) {
        this.errors.push('L\'email ne correspond pas au format demandé')
        return false
      }
    },
    validPassword () {
      const passwordregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
      if (this.form.password && !passwordregex.test(this.form.password)) {
        this.errors.push('Le mot de passe ne correspond pas au format demandé : minimum 8 caractères, une majuscule, une minuscule, un nombre et un caractèrs spécial')
        return false
      }
    },
    validUsername () {

    },
    validTextField () {
      if (this.form.email && this.form.password && this.form.username && this.form.surname && this.form.name) {
        return true
      } else {
        this.errors.push('Tous les champs doivent être renseignés')
        return false
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
        this.$http.post('https://localhost:8000/api/users.json', {...this.form})
          .then(response => console.log(response))
          .catch(error => console.log(error))
      }
      console.log(this.errors)
    }
  }
})

</script>

<style scoped>
</style>
