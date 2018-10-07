<template>
  <div class="form-inline">
    <h3> Sign In </h3>
    <div class="form-group">
      <input type="text" v-model="email" class="form-control" placeholder="email..."> &nbsp;
      <input type="password" v-model="password" class="form-control" placeholder="password..."> &nbsp;
      <button class="btn btn-primary" @click="signIn"> Sign In </button>
    </div>
    <br/><br/>
    <router-link to="/signup"> Not a user ? Sign Up </router-link>
    <br/> <br/>
    <p class="error"> {{ error.message }} </p>
    <br/>
  </div>
</template>

<script>
import { firebaseApp } from '../firebase.js'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn() {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
