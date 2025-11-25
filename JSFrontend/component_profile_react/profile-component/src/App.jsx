import Card from "./components/Profile/Card.jsx"

export default function App() {
  return (
    <>
      <div className="app" >
        <Card  
          avatar="https://randomuser.me/api/portraits/men/75.jpg"
          name="Tiago" 
          bio="Fullstack Java Script Developer" 
          email="fh.tiago@gmail.com" 
          phone="+55 (55) 999 930 333" 
          githubUrl="https://github.com/tiagohinterholz" 
          linkedinUrl="https://linkedin.com/in/tiago-hinterholz" 
          twitterUrl="https://twitter.com"
        />
      </div>
    </> 
  )
}