<script setup>
import { ref } from 'vue';
import { useSearchHistoryStore } from '@/stores/useSearchHistoryStore';

const emit = defineEmits(['formSubmit', 'update:modelValue'])
const searchInput = ref('')

const searchHistory = useSearchHistoryStore()

function handleSubmit(ev) {
    ev.preventDefault()
    searchHistory.pushToHistory(searchInput.value)
    emit('formSubmit', searchInput.value)
}

function showSearchHistory() {
  alert(`Histórico de pesquisa:\n${searchHistory.users.join('\n')}`)
}

</script>

<template>
    <form @submit="handleSubmit">
        <input 
            type="text" 
            v-model="searchInput"
            @input="$emit('update:modelValue', $event.target.value)"
        >
        <button type="submit">Carregar Usuário</button>
        <button type="butotn" @click="showSearchHistory">Ver histórico</button>
    </form>
</template>

<style scoped>
input,
button {
  max-width: 20rem;
  padding: .5rem;
}

input {
  background-color: #1c1a1d;
  border: 1px solid #069c6a;
  border-radius: .25rem;
  color: #e5e5e5;
  margin: 1rem 1rem 1rem 0;
}

button {
  background-color: #0918a5;
  border: unset;
  border-radius: .25rem;
  color: #eee7f1;
  font-size: 1rem;
  margin-left: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

button:hover {
  cursor: pointer;
  filter: brightness(0.95);
}
</style>