import { reactive, ref, computed } from 'vue'
import { fetchGithubUser, fetchUserRepositories } from '../services/githubService'

export function useGithub() {
  const state = reactive({
    login: '',
    name: '',
    bio: '',
    company: '',
    avatar_url: '',
    repos: [],
  })

  const username = ref('')

  async function loadUser() {
    const user = await fetchGithubUser(username.value)
    Object.assign(state, user)

    state.repos = await fetchUserRepositories(user.login)
  }

  const reposCountMessage = computed(() => {
    return state.repos.length > 0
      ? `${state.name} possui ${state.repos.length} repositórios públicos`
      : `${state.name} não possui repositórios públicos!`
  })

  return {
    state,
    username,
    loadUser,
    reposCountMessage,
  }
}
