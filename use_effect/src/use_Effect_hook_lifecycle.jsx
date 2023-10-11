import React, { useEffect, useState } from 'react'

/* This is a good example not only of react's useEffect,
 * but also shows that eventListeners, no matter what
 * JavaScript library/framework you are working in
 * (or even just Vanilla JS) needs to be unmounted at
 * some point during the application lifecycle, otherwise
 * these event listeners will continue to consume more and
 * more resources (RAM) until the application ends (which in
 * production it ideally doesn't, so you need to handle memory here...)*/

export default function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        // simple demonstration of removing the event listener
        // at the end of the hook's lifecycle
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return <div>{windowWidth}</div>
}
