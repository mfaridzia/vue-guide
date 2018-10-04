<template>
  <div class="col-md-6">
    <div class="joke-card">
      <div class="card-block">
        <button class="close" @click="removeJoke(index)"> <span> &times; </span> </button>
        <p><u>{{ joke.setup }}</u></p>
        <p><em>{{ joke.punchline }}</em></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['joke', 'index'],
  methods: mapActions([
    'removeJoke'
  ])
}
</script>

<style scoped>
.joke-card {
  border: 2px solid rgb(77, 75, 75);
  border-radius: 2px;
  padding: 5px;
  margin: 5px;
}
</style>
