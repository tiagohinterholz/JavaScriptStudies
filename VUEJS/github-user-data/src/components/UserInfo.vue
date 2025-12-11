<script setup>
defineProps(['login', 'name', 'company', 'bio', 'avatar_url'])
</script>

<template>
  <div>
    <img v-bind:src="avatar_url">
    <strong>@{{ login }}</strong>
    <h2>{{ name }}</h2>
    <h3>{{ company }}</h3>
    <span>{{ bio }}</span>
  </div>
</template>

<style scoped>
img {
  border: 1px solid #e5e5e5;
  border-radius: 999px;
  display: block;
  margin: 1rem auto;
  width: 8rem;
  height: 8rem;
}
h2{
  color: #f64348;
  margin: 1rem auto .25rem;
}
span{
  display: block;
  margin: 1rem auto;
}
</style>