import React, { useState } from 'react'
import './App.css'

function countInitial() {
    console.log('run function :=>')
    return 4
}
export default function App() {
    /* useState can get expensive because it re renders
     * the entire page every time it is run, to circumvent
     * this, passing a callback function that returns the
     * in itial state can save on resources and is a good practice,
     * note that this console log will only run ONCE
     * and it will only set the initial value of 4 once. */

    // const [count, setCount] = useState(() => {
    // console.log('run function :=>')
    // return 4
    // })

    /* However if we pass a global countInitial function that
     * does the same thing, this Will run every single time the
     * count variable is changed, causing it to behave as if
     * we had passed it a hard coded value (like 4)*/

    const [count, setCount] = useState(countInitial())

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
                <button type="submit" onClick={incrementCount}>
                    +
                </button>
            </div>
        </>
    )
}
