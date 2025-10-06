class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(try_email, try_password) {
        if (try_email === this.email && try_password === this.password) {
            console.log("Login realizado com sucesso!")
        } else {
            console.log("Email ou senha inválidos. Tente novamente!")
        }
    }
}

const tiago = new User("Tiago F. Hinterholz", "fh.tiago@gmail.com", "123456")

tiago.login("fh.tiago@gmail.com", "123456")