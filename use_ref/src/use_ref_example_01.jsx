import React, { useState, useEffect, useRef } from 'react'

export default function App() {
    const [name, setName] = useState('')
    const renderCount = useRef(1)
    /* UseRef is very similar in nature to Vue's ref object
     * in that it does not update every time the component
     * itself is changed, this is unlike useState */

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times</div>
        </>
    )
}
