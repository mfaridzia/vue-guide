<template>    
<div class="item">
  <div class="col-md-12" @click="switchItem">
    <div class="item-card">
      <div class="card-body">
        <h5 class="card-title"> {{ item.name }} </h5>
        <div v-for="(value, key, index) in item" :key="index">
          <div v-if="index < 5">
            <strong> {{ key }} </strong>: {{ value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['passedItem', 'type', 'value'],
  data() {
    return {
      item: {}, // for avoid mutate props directly
    }
  },
  methods: {
    switchItem() {
      let random_id = Math.floor(Math.random() * 63) + 1
      fetch(`https://swapi.co/api/${this.type}/${random_id}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => this.item = json)
    }
  },
  created() {
    this.item = this.passedItem // for avoid mutate props directly
  }
}
</script>

<style scoped>
.item-card {
  border: 2px solid rgb(0, 156, 104);
  border-radius: 4px;
  padding: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  margin-bottom: 5px;
}
</style>
