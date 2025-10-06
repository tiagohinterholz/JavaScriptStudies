import styles from "./styles.module.css"

export default function Card({ posterImg, title }) {
    return (
    <div className={styles.container}>
        <img src={posterImg} alt="Foto" />
        <div>
            <h2>{title}</h2>
            <p>Um poster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3</p>
            <button>Comprar Agora</button>
        </div>
    </div>
    )
}