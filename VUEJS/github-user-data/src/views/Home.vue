<script setup>
import { useSearchHistoryStore } from '@/stores/useSearchHistoryStore';

const searchHistory = useSearchHistoryStore()
</script>

<template>
    <h1>Welcome</h1>
    <p>This is the app homepage</p>
    <section>
        <h2>Histórico de pesquisa</h2>
        <p v-for="user in searchHistory.users"> {{ user }}</p>
    </section>
</template>

<style scoped>
section {
  margin: 1rem 0;
}
p {
  margin-top: 1rem;
}
</style>