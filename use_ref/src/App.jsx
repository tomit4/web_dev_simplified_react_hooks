import React, { useState, useEffect, useRef } from 'react'

export default function App() {
    const [name, setName] = useState('')
    const prevName = useRef('')

    /* Here we are holding the pervious value of name
     * within a ref called prevName
     * This causes the effect of showing all
     * previous letters (minus one) in the div below*/

    /* Of importance to note is that while the useState hook
     * could hold onto the reference to prevName also,
     * this would be created per render. useEffect, when
     * used in conjunction with a useRef() hook is more
     * efficient when keeping track of a specific state as
     * it does not require a re render when
     * determining/calculating the new value*/
    useEffect(() => {
        prevName.current = name
    }, [name])

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <div>
                My name is {name}, and it used to be {prevName.current}
            </div>
            <button type="submit" onClick={focus}>
                Focus
            </button>
        </>
    )
}
