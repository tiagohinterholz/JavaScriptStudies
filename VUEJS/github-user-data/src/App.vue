<script setup>
  import Profile from './components/Profile/Profile.vue';
  import { ref } from 'vue'
  const isOpen = ref(true)
</script>

<template>
  <input type="checkbox" v-model="isOpen">{{ isOpen }}
  <Profile v-if="isOpen">
    <h1>GitHub User Data</h1>
    
    <template v-slot:footer>
      <footer>
        Desenvolvido por <a href="https://github.com/tiagohinterholz" target="_blank">Tiago F. Hinterholz</a>
      </footer>
    </template>
  </Profile>
</template>

<style>
#app {
  font-family: 'Ubuntu', sans-serif;
  min-height: 100vh;
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
}

a {
  color: #09acac;
}

h1{
  color: #f64348;
  margin: 1rem auto .25rem;
}
footer {
  height:3rem;
  margin-top: 2rem;
  padding: 1rem;
}
</style>