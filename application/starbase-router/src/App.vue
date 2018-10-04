<template>
  <div id="app">
    <HalloDunia />
    <div id="nav">
      <!-- <router-link :to="{ name: 'data', params: { type: 'Hallo' }}">Data</router-link> -->
      <h4> 
        <router-link class="link" to="/data/people"> Meet the characters </router-link> |
        <router-link class="link" to="/data/planets"> Explore the planets </router-link> 
      </h4>
    </div>
    <router-view/>
  </div>
</template>

<script>
const HalloDunia = () => import(/* webpackChunkName: "hallo" */ '@/components/HalloDunia.vue')
export default {
  components: {
    HalloDunia,
    //'HalloDunia': () => import(/* webpackChunkName: "hallo" */ '@/components/HalloDunia.vue')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link {
  color: rgb(0, 156, 104);
}
</style>
