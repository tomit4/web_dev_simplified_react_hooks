import React, { useState } from 'react'
import './App.css'

export default function App() {
    /* This demonstrates that the state of whatever is passed into
     * useState is completely rewritten  every time that the
     * callback function (setState in this case) is called*/
    const [state, setState] = useState({ count: 4, theme: 'blue' })
    const { count, theme } = state

    /* Both of these count functions will rewrite the Object{} state
     * essentially destroying the old object and replacing it with
     * whatever is returned. Thusly, the key/value of "theme: 'blue'"
     * is  no longer accessible in this example*/

    // function decrementCount() {
    // setState(prevState => {
    // return { count: prevState.count - 1 }
    // })
    // }

    // function incrementCount() {
    // setState(prevState => {
    // return { count: prevState.count + 1 }
    // })
    // }

    /* Thusly the logic to circumvent this inherent
     * mutation in useState is to utilize the JS
     * spread operator to reference the previous state*/

    function decrementCount() {
        setState(prevState => {
            return { ...prevState, count: prevState.count - 1 }
        })
    }

    function incrementCount() {
        setState(prevState => {
            return { ...prevState, count: prevState.count + 1 }
        })
    }

    /* NOTE: obviously this re rendering of the entire object
     * can get convoluted/expensive? depending on the amount
     * of properties you hold within it, thusly utilizing useState
     * per variable is a viable solution to reduce complexity
     * (and possibly resources ??) */
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
