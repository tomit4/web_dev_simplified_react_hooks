import { useState, useMemo, useEffect } from 'react'

function slowFunction(num) {
    console.log('Calling Slow Function :=>')
    for (let i = 0; i <= 10000000; i++) {}
    return num * 2
}

export default function App() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])

    /* A secondary use of useMemo
     * (other than storing a value in cache, example 1),
     * regards referential equality
     * (reference to an Object or Array within JS)*/

    /* Due to refrential equality, every timee that setDark() is called,
     * useEffect() creates a secondary themeStyles object due to not
     * utilizing the themeStyles directly, but rather REFERENCING themeStyles*/

    // const themeStyles = {
    // backgroundColor: dark ? 'black' : 'white',
    // color: dark ? 'white' : 'black',
    // }

    /* However, if we utilize the useMemo hook instead,
     * it then holds the dark variable's state in cache,
     * and thusly useEffect can utilize the actual original
     * themeStyles object and NOT A REFERENCE*/

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black',
        }
    }, [dark])

    useEffect(() => {
        console.log('Theme Changed :=>')
    }, [themeStyles])

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
