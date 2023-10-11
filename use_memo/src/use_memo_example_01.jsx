import { useState, useMemo } from 'react'

function slowFunction(num) {
    console.log('Calling Slow Function :=>')
    for (let i = 0; i <= 10000000; i++) {}
    return num * 2
}

export default function App() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    /* In this current state, the entire block of this App() code runs
     * as we are passing a simple piece of application state(number)
     * into slowFunction(), thusly, even when we use a separate setDark()
     * method, which should have nothing to do with the application
     * state of number, it still takes a while to change due to the
     * slowness of the function (the crazy long does nothing for loop above)*/

    // const doubleNumber = slowFunction(number)

    /* React's useMemo() hook holds the number variable's state
     * in memory(cache) and only runs when changed (setNumber),
     * and not when it's state is untouched (setDark).
     * Thusly, now setDark should be more instantaneous,
     * while setNumber will still run slowly*/

    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])

    /* NOTE: this basically trades off application state costs
     * for memory costs. By storing this in memory, it basically
     * costs more RAM because it does not refresh the state every
     * re render, so it is not useful to outright replace useState
     * with useMemo */

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
    }

    return (
        <>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button
                type="submit"
                onClick={() => setDark(prevDark => !prevDark)}
            >
                Change Theme
            </button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}
