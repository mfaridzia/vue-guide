<template>
  <div class="col-md-4">
    <div class="event-card">
      <h4> {{ event.title }} </h4>
      <p> {{ event.description }} </p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Date: {{ event.date }} </li>
        <li class="list-group-item"> Location: {{ event.location }} </li>
        <li class="list-group-item"> Email: {{ event.email }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['event']
}
</script>

<style scoped>
.event-card {
  border: 2px solid grey;
  margin-top: 10px;
  border-radius: 4px;
}
</style>
