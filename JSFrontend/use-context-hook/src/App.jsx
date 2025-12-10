import UserContext from "./contexts/userContext"
import UserInfo from "./components/UserInfo"

export default function App() {
  const user = {
    name: "Joao",
    email: "joao@email.com"
  }

  return (
    <>
      <UserContext.Provider value={user}>
        <h1>Usando contexto</h1>
        <UserInfo />
      </UserContext.Provider>
      <div>
        {/* Não há acesso ao context nessa div */}
      </div>
    </>
  )
}