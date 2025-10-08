const playlists = [
    {
        id: 1, 
        name: 'Playlist Top', 
        tags: ['rock', 'metal'], 
        music_list: [{id: 1, title: 'Let Her Go', year: '2012', album: 'All the light lights'}]
    },
    {
        id: 2, 
        name: 'Playlist BonJovi', 
        tags: ['rock', 'melodic'], 
        music_list: [{id: 1, title: 'Let Her Go', year: '2012', album: 'All the light lights'}]
    },
    {
        id: 3, 
        name: 'Playlist System Of Down', 
        tags: ['metal', 'new metal'], 
        music_list: [{id: 1, title: 'Let Her Go', year: '2012', album: 'All the light lights'}]
    },
]

module.exports = {
    index : (request, response) => {
        response.json(playlists)
    },
    show: (request, response) => {
        const {id} = request.params
        const playlist = playlists.find(playlist => playlist.id === +id)
        if (!playlist) {
            response.status(404)
            response.json({message: 'Playlist not found'})
        } else {
            response.json(playlist)
        }
    },
    save: (request, response) => {
        const {name, tags, music_list} = request.body
        const newPlaylist = {
            id: Math.floor(Math.random() * 99999),
            name: name,
            tags: tags || [],
            music_list: music_list || []            
        }
        playlists.push(newPlaylist)
        response.status(201)
        response.json(newPlaylist)
    },
    update: (request, response) => {
        const {id} = request.params
        const {name, tags} = request.body
        const playlistIndex = playlists.findIndex(playlist => playlist.id === +id)
        if (playlistIndex === -1) {
            return response.status(404).json({ message: "Playlist not found!" })
        }
        if (typeof name === 'string') {
            playlists[playlistIndex].name = name
        }
        if (typeof tags === 'string') {
            playlists[playlistIndex].tags = tags
        }
        response.json(playlistIndex)
    },
    addTag: (request, response) => {
        const {id} = request.params
        const {tag} = request.body
        const playlistIndex = playlists.findIndex(playlist => playlist.id === +id)
        if (playlistIndex === -1) {
            return response.status(404).json({message: 'PLaylist not found'})
        }
        if (typeof tag !== 'string' || playlists[playlistIndex].tags.includes(tag)) {
            return response.status(400).json({message: 'Invalid Tag'})
        }
        playlists[playlistIndex].tags.push(tag)
        response.status(201)
        response.json(playlists[playlistIndex])
    },
    removeTag: (request, response) => {
        const {id, name} = request.params
        
        const playlistIndex = playlists.findIndex(playlist => playlist.id === +id)
        if (playlistIndex === -1) {
            return response.status(404).json({message: 'Playlist not found'})
        }
        if (typeof name !== 'string' || !playlists[playlistIndex].tags.includes(name)) {
            return response.status(400).json({message: 'Invalid Tag'})
        }
        playlists[playlistIndex].tags = playlists[playlistIndex].tags.filter(tag => tag !== name)
        response.status(204).end()
    },
    delete: (request, response) => {
        const {id} = request.params
        const playlistIndex = playlists.findIndex(playlist => playlist.id === +id)
        if (playlistIndex === -1) {
            return response.status(404).json({ message: "Playlist not found!" })
        }
        playlists.splice(playlistIndex, 1)
        response.status(204).end()
    },
    saveMusic: (request, response) => {
        const {id} = request.params
        const {title, year, album} = request.body
        
        const playlist = playlists.find(playlist => playlist.id === +id)
        if (!playlist) {
            return response.status(404).json({message: 'Playlist not found'})
        }
        
        const newMusic = {
            id: Math.floor(Math.random() * 99999),
            title: title,
            year: year,
            album: album
        }
        playlist.music_list.push(newMusic)
        response.status(201)
        response.json(playlist)
    },
    deleteMusic: (request, response) => {
        const {id, musicId} = request.params
        const playlist = playlists.find(playlist => playlist.id === +id)
        if (!playlist) {
            return response.status(404).json({ message: "Playlist not found!" })
        }
        const musicIndex = playlist.music_list.findIndex(music => music.id === +musicId)
        if (musicIndex === -1) {
            return response.status(404).json({ message: "Music not found!" })
        }
        playlist.music_list.splice(musicIndex, 1)
        response.status(204).end()
    },
    updateMusic: (request, response) => {
        const {id, musicId} = request.params
        const {title, year, album} = request.body
        const playlist = playlists.find(playlist => playlist.id === +id)
        if (!playlist) {
            return response.status(404).json({ message: "Playlist not found!" })
        }
        const musicIndex = playlists.list_music.findIndex(music => playlist.music_list.id === +musicId)
        if (musicIndex === -1) {
            return response.status(404).json({ message: "Music not found!" })
        }
        const updatedMusic = {
            title: title,
            year: year,
            album: album
        }
        response.status(201)
        response.json(updatedMusic)   
    }
}