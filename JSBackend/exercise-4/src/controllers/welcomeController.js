module.exports = {
    welcome: (request, response) => {
        const displayname = request.authenticatedUser?.name ?? 'Visitante'
        response.json({message: `Seja bem vindo ${displayname}`})
    }
}