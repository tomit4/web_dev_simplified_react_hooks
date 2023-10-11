import React, { useState } from 'react'
import './App.css'

export default function App() {
    const [count, setCount] = useState(4)
    /* This demonstrates an unintuitive aspect of useState:
     * One would think this function would decrement by 2
     * But in actuality, setCount is referenced as useState(4)
     * which will always look to the initial value of 4 before execution*/

    // function decrementCount() {
    // setCount(count - 1)
    // setCount(count - 1)
    // }

    /* Instead useState functions hold a reference
     * to their initial variable (count in this case)
     * within a secondary callback function to the useState's
     * second parameter, itself a callback (setCount) */
    function decrementCount() {
        setCount(prevCount => prevCount - 1)
        // This would correctly delete by 2
        // setCount(prevCount => prevCount - 1)
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
                <button type="submit" onClick={incrementCount}>
                    +
                </button>
            </div>
        </>
    )
}
