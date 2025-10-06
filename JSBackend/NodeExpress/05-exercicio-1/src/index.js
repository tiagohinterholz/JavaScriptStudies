const express = require('express')
const path = require('node:path')

const app = express()
let emails = []

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.get('/', (request, response) => {
    response.render('index')
})

app.post('/signup', (request, response) => {
    const { email } = request.body
    
    if (email) {
        emails.push(email)
        response.redirect('/success')
    } else {
        response.redirect('/')
    }    
})

app.get('/success', (request, response) => {
    response.render('success')
})

app.get('/emails', (request, response) => {
    response.render('emails', { emails: emails })
})

app.post('/emails/delete', (request, response) => {
  const { email } = request.body;
  emails = emails.filter(item => item !== email);
  response.redirect('/emails');
});

const PORT = 3000
app.listen(PORT, () => console.log('Servidor Iniciado'))
