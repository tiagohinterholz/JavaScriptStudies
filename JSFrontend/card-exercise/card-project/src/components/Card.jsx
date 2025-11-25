import styles from "./styles.module.css"

export default function Card( props ) {
    return (
    <div className={styles.container}>
        <img src={props.poster} alt="Foto" />
        <div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <button>Comprar Agora</button>
        </div>
    </div>
    )
}