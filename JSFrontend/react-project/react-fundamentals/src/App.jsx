import Title from "./components/Title"
import { Subtitle } from "./components/Subtitle"
import Status from "./components/Status"
import styles from "./App.module.css"

export default function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <Status />
    </div>
  )
}