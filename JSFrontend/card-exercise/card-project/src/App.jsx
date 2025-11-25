import Card from "./components/Card"
import posterImg1 from "./assets/card.jpg"
import posterImg2 from "./assets/card2.jpg"
import posterImg3 from "./assets/card3.jpg"

export default function App() {
  return (
    <>
      <Card title="Poster: Star Wars (1977)" poster={posterImg1} text="Filme 1"/>
      <Card title="Poster: Empires Strikes (1980)" poster={posterImg2} text="Filme 2"/>
      <Card title="Poster: Return of Jedi (1983)"poster={posterImg3} text="Filme 3"/>
    </>
  )
}