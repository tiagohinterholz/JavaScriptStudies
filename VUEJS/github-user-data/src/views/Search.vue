<script setup>
import Profile from '../components/Profile/Profile.vue';
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