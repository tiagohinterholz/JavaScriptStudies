import { useState } from "react"
import TextInput from "./TextInput"

export default function NewGameForm({ addGame }) {

    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")
    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({ title, cover })
        setCover("")
        setTitle("")
    }
    return (
        <form onSubmit={handleSubmit}>
        <TextInput id="title" label="Título" value={title} onChange={(ev) => setTitle(ev.target.value)} />
        <TextInput id="cover" label="Capa" value={cover} onChange={(ev) => setCover(ev.target.value)} />
        <button type="submit">Adicionar a biblioteca</button>
      </form>
    )
}