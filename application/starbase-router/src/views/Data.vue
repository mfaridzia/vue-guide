<template>
  <div class="col-md-6 col-md-offset-3">
    Choose ID:
    <select v-model="initid">
      <option disabled value="" selected>Select a value...</option>
      <option v-for="(value, index) in 50" :key="index"> {{ value }} </option>
    </select>
      <Item
        v-for="(item, index) in items"
        v-if="item.detail !== 'Not found'"
        :key="index"
        :passed-item="item"
        :type="type"
      />
       <div v-else>Data Kosong!</div>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  data() {
    return {
      type: this.$route.params.type,
      items: [],
      initid: ''
    }
  },
  components: {
    Item
  },
  watch: {
    '$route': 'fetchItems',
    'initid': 'fetchItems'
  },
  methods: {
    fetchItems() {
      this.items = []
      this.type = this.$route.params.type
      let id = this.initid
      console.log(id)
      fetch(`https://swapi.co/api/${this.type}/${id}/?format=json`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => this.items.push(json))
    }
  },
  created() {
    this.fetchItems()
  }
}
</script>

