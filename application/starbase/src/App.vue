<template>
  <div id="app">
    <h3> {{title}} </h3>
    <div class="col-md-12">
      <Character 
        v-for="(id, index) in initial_ids" 
        :key="index"
        :id="id"
      />
    </div>
  </div>
</template>

<script>
import Character from './components/Character.vue'

export default {
  name: 'app',
  data() {
    return {
      title: 'Generate Your Team',
      initial_ids: [1, 9, 12]
    }
  },
  components: {
    Character
  }
}
</script>

<style>
body {
  background: #263238;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
