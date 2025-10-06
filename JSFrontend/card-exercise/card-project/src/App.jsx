import Card from "./components/Card"
import posterImg1 from "./assets/card.jpg"
import posterImg2 from "./assets/card2.jpg"
import posterImg3 from "./assets/card3.jpg"

export default function App() {
  return (
    <>
      <Card title="Poster: Star Wars (1977)" posterImg={posterImg1}/>
      <Card title="Poster: Empires Strikes (1977)" posterImg={posterImg2}/>
      <Card title="Poster: Fucking ass (1977)"posterImg={posterImg3}/>
    </>
  )
}