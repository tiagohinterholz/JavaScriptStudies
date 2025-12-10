const app = Vue.createApp({
    data() { 
        return {
            name: "",
            login: "",
            bio: "",
            company: "",
            avatar_url: "",
            searchInput: ""
        }
    },
    methods: {
        async fetchGithubUser() {
            const response = await fetch(`https://api.github.com/users/${this.searchInput}`)
            const { login, name, bio, company, avatar_url } = await response.json()
            this.login = login
            this.name = name,
            this.bio = bio
            this.company = company
            this.avatar_url = avatar_url
        }
    }
})

app.mount('#app')