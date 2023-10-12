import React, { useState, useEffect, useRef } from 'react'

export default function App() {
    const [name, setName] = useState('')
    const inputRef = useRef()
    /* Every html like element in this jsx document
     * is accessible via React's useRef hook.
     * Simply applying the ref attribute to our
     * input element below, gives us access to
     * that node similar to the JS native
     * document.querySelector() method */
    function focus() {
        // console.log(' :=>', inputRef.current)
        // Places cursor inside of input field
        inputRef.current.focus()
        // Antipatern:
        // inputRef.current.value = 'Some value'
        // This should be  handled by useState
    }

    return (
        <>
            <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <div>My name is {name}</div>
            <button type="submit" onClick={focus}>
                Focus
            </button>
        </>
    )
}
