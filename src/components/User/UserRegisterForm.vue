<template>
    <div class="d-flex flex-row">
        <form  class="d-flex flex-column w-50">
          <div class="form-group">
            <label>Email address</label>
            <input v-model.lazy="form.email" novalidate="true" type="email" class="form-control" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input v-model.lazy="form.password" type="password" class="form-control" placeholder="Password">
          </div>
          <div class="form-group">
            <label>Pseudo</label>
            <input v-model.lazy="form.username" type="text" class="form-control" placeholder="pseudo">
          </div>
          <div class="form-group">
            <label>Prénom</label>
            <input v-model.lazy="form.name" type="text" class="form-control" placeholder="Prenom">
          </div>
          <div class="form-group">
            <label>Nom</label>
            <input v-model.lazy="form.surname" type="text" class="form-control" placeholder="nom">
          </div>
          <button  class="btn btn-primary">Submit</button>
        </form>
        <div class="w-50 d-flex flex-row justify-content-center align-items-center">
          <pre>{{ $data }}</pre>
        </div>
    </div>
</template>

<script>
export default ({
  name: 'UserRegisterForm',
  data () {
    return {
      form:
      {
        email: '',
        password: '',
        username: '',
        name: '',
        surname: ''
      }
    }
  }
  /* methods:
  {
      submitForm (e) {
      e.preventDefault()
      console.log({...this.form})
    }
  } */
})
</script>
<script scoped>
</script>
