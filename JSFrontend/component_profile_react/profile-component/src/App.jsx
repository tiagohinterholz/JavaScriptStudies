import Card from "./components/Profile/Card.jsx"

export default function App() {
  return (
    <>
      <div className="app" >
        <Card  
          avatar="https://randomuser.me/api/portraits/men/75.jpg"
          name="Tiago" 
          bio="Fullstack Python + NextJS" 
          email="fh.tiago@gmail.com" 
          phone="+55 (55) 999 930 333" 
          githubUrl="https://github.com" 
          linkedinUrl="https://linkedin.com" 
          twitterUrl="https://twitter.com"
        />
      </div>
    </> 
  )
}