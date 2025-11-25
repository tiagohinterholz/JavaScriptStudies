import { useState } from 'react'

function getInitialValue() {
    return 1 + 1
}

export default function useCounter() {
    const [count, setCount] = useState(() => getInitialValue())

    const increment = () => {
        setCount((current_state) => current_state + 1)
        // para poder utilizar um valor prévio e fazer mudar passasse o paramentro numa arrow function
        setCount((current_state) => current_state + 1)
    }

    return { count, increment }
}