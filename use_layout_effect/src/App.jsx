import { useState, useEffect } from 'react'

export default function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
    }, [count])

    return (
        <>
            <button type="submit" onClick={() => setCount(c => c + 1)}>
                Increment
            </button>
            <div>{count}</div>
        </>
    )
}
