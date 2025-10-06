import './App.css'
import useCounter from './hooks/useCounter'

// Regra 1: Onde usar o hooks - somente dentro de funções React ou criando nosso proprio hook
// Regra 2: Ordem dos hooks

function App() {
  const counter = useCounter()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
