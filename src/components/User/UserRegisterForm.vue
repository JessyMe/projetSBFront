<template>
    <v-container fluid>
        <v-form>
          <v-container fluid>
            <label>Email address</label>
            <v-input  novalidate="true" type="email" v-model="form.email" class="form-control"></v-input>
          </v-container>
          <v-container fluid>
            <label>Password</label>
            <v-input  type="password" class="form-control" v-model.lazy="form.password"></v-input>
          </v-container>
          <v-container fluid>
            <label>Pseudo</label>
            <v-input  type="text" class="form-control" v-model.lazy="form.username"></v-input>
          </v-container>
          <v-container fluid>
            <label>Prénom</label>
            <v-input  type="text" class="form-control" v-model.lazy="form.name"></v-input>
          </v-container>
          <v-container fluid>
            <label>Nom</label>
            <v-input type="text" class="form-control" v-model.lazy="form.surname"></v-input>
          </v-container>
          <v-container fluid>
          <v-btn submit color="orange">Submit</v-btn>
          <v-btn reset color="grey">Cancel</v-btn>
          </v-container>
          <pre>{{ $data.form }}</pre>
        </v-form>
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
      }
    }
  },
  created () {
    console.log(this)
    console.log(this.form)
  }
})

</script>
<script scoped>
</script>
