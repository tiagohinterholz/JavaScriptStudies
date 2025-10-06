document.getElementById('sessionBtn').addEventListener('click', function() {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
}) 

document.getElementById('readSession').addEventListener('click', function(){
    const info = sessionStorage.getItem('info')
    alert(`A informação salva é ${info}`)
})

document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
})

document.getElementById('readLocal').addEventListener('click', function(){
    const info = localStorage.getItem('text')
    alert(`O texto salvo é ${info}`)
})

document.getElementById('cookieBtn').addEventListener('click', function() {
    const input = document.getElementById('cookie')
    //cookieName = value; expires = UTCStringDate; path=/
    const cookie = `info=${input.value};`
    const expiration = `expires=${new Date(2025,10,13)};`
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
})  