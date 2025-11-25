import { useState } from "react"
import TextInput from "./TextInput"


export default function NewGameForm ({ addGame }) {
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        const id = Math.floor(Math.random() * 1000000)
        const newGame = { id, title, cover }
        addGame(newGame)
        
        setTitle("")
        setCover("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput id='title' label='Titulo' onChange={(ev) => setTitle(ev.target.value)} />
            <TextInput id='cover' label='Capa' onChange={(ev) => setCover(ev.target.value)} />
            <button type="submit">Adicionar a biblioteca</button>
        </form>
    )
}