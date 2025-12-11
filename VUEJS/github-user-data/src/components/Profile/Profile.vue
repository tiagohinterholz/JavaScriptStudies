<script setup>
import { onMounted, onUpdated, onUnmounted } from 'vue'
import { useGithub } from './composables/useGithub'
import UserInfo from '../UserInfo.vue'
import UserRepo from '../UserRepo.vue'
import UserForm from '../UserForm.vue'

const { state, username, loadUser, reposCountMessage } = useGithub()

onMounted(() => {
  console.log("O componente foi montado!")
})

onUpdated(() => {
  console.log("O componente foi atualizado!")
})

onUnmounted(() => {
  console.log("O componente foi desmontado!")
})

</script>

<template>
    <slot></slot>
    <p>Pesquisandopor <strong>https://api.github.com/users/{{ username }}</strong></p>
    <UserForm @form-submit="loadUser" v-model="username"/>

    <UserInfo
      v-if="state.login !==''" 
      :login="state.login"
      :name="state.name"
      :company="state.company"
      :bio="state.bio"
      :avatar_url="state.avatar_url"
    />    
  
    <section v-if="state.repos.length >0">
        <h2>{{ reposCountMessage }}</h2>
        <UserRepo
          v-for="repo of state.repos" 
          :full_name="repo.full_name"
          :description="repo.description"
          :html_url="repo.html_url"
        />
    </section>
  <slot name="footer"></slot>
</template>