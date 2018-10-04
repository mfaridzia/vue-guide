<template>
  <div id="app">
    <h2> Want a Joke? </h2>
    <button class="btn-joke" @click="initJokes">Add Ten Random Jokes</button> &nbsp;
    <button class="btn-joke" @click="addJoke"> Add a Joke </button> 
    <br/> 
    <br/>
    <h4> Filter by type: </h4>
    <span v-for="type in types" :key="type">
      <input 
        type="checkbox" 
        v-model="checkedType" 
        :value="type" 
        checked
      >
      <label class="label-type"> {{ type }} </label> &nbsp;
    </span>
    <br/>
    <div class="col-md-12">
      <Joke 
        v-for="(joke, index) in $store.state.jokes" 
        v-show="checkedType.includes(joke.type)"
        :key="index"
        :joke="joke"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './components/Joke.vue'

export default {
  name: 'app',
  data() {
    return {
      types: ['general', 'knock-knock', 'programming'],
      checkedType: ['general', 'knock-knock', 'programming']
    }
  },
  methods: mapActions([
    'initJokes',
    'addJoke'
  ]),
  components: {
    Joke
  }
}
</script>

<style>
body {
  background-color: rgb(233, 233, 233);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn-joke {
  padding: 10px;
  background: #2c3e50;
  color: #fff;
  border: 0px;
  border-radius: 3px;
}
.btn-joke:hover {
  color: #fff;
}
.label-type {
  margin-left: 5px;
  position: relative;
  top: -2px;
}
</style>
