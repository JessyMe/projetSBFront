<template>
    <v-container fluid>
        <v-form @submit="submitForm" ref="form">
          <v-container fluid>
            <v-text-field label="Email" rounded color="primary" outlined type="email" v-model="email"></v-text-field>
          </v-container>
          <v-container fluid>
            <v-text-field  type="password" label="Mot de passe" v-model.lazy="password" outlined rounded color="primary"></v-text-field>
          </v-container>
          <v-container fluid>
            <v-text-field  type="text" label="Pseudo" v-model.lazy="username" outlined rounded color="primary"></v-text-field>
          </v-container>
          <v-container fluid>
            <v-text-field  type="text" label="Prénom" v-model.lazy="name" outlined rounded color="primary"></v-text-field>
          </v-container>
          <v-container fluid>
            <v-text-field type="text" label="Nom" v-model.lazy="surname" outlined rounded color="primary"></v-text-field>
          </v-container>
          <v-container fluid>
          <v-btn submit color="orange">Submit</v-btn>
          <v-btn @click="resetForm" color="grey">Cancel</v-btn>
          </v-container>
        </v-form>
        <pre>{{$data}}</pre>
    </v-container>
</template>

<script>
export default ({
  name: 'user-register-form',
  data () {
    return {
      email: '',
      password: '',
      username: '',
      name: '',
      surname: ''
    }
  },
  methods: {
    submitForm (e) {
      e.preventDefault()
      console.log(this.data)
    },
    reset () {
      this.$refs.form.reset()
    }
  }
})

</script>

<style>
</style>
