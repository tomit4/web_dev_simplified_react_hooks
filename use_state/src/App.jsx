import React, { useState } from 'react'
import './App.css'

export default function App() {
    const [count, setCount] = useState(4)
    // This doesn't get reset because you
    // created a different aspect of application
    // state via a secondary call to React's useState hook
    const [theme, setTheme] = useState('blue')

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <div className="container">
                <button type="submit" onClick={decrementCount}>
                    -
                </button>
                <span>{count}</span>
                <span>{theme}</span>
                <button type="submit" onClick={incrementCount}>
                    +
                </button>
            </div>
        </>
    )
}
