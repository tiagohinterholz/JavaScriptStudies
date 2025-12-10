import { useState, useRef } from 'react'
import RefExample from './RefExample'

export default function App() {
	let variable = 0
	const [state, setState] = useState(0)
	const ref = useRef(0)

	const showValues = () => {
		alert(`
			Variable: ${variable}
			Ref: ${ref.current}
			State: ${state}
		`)
	}

	return(
		<div>
			<h2>Exemplo de useRef com DOM</h2>
			<RefExample />
			<h2>Conheendo o useRef</h2>
			<hr />
			<p>Variável: {variable}</p>
			<p>Ref: {ref.current}</p>
			<p>State: {state}</p>
			<button onClick={()=> variable++}>Aumentar Variable</button>
			<button onClick={()=> ref.current++}>Aumentar Ref</button>
			<button onClick={()=> setState(state => state + 1)}>Aumentar State</button>
			<hr />
			<button onClick={showValues}>Exibir Valores</button>
		</div>
	)
}