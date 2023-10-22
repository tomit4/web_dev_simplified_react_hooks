import { useLayoutEffect, useEffect, useState, useRef } from 'react'

export default function App() {
    const [show, setShow] = useState(false)
    const popup = useRef()
    const button = useRef()

    /* useEffect() and useLayoutEffect() are extremely similar,
     * the only difference is that useEffect() is asynchronous
     * whereas useLayoutEffect() is synchronous.
     * useLayoutEffect() is helpful when UI elements need to be
     * rendered only after its callback function has finished running*/

    useLayoutEffect(() => {
        if (popup.current == null || button.current == null) return
        const { bottom } = button.current.getBoundingClientRect()
        popup.current.style.top = `${bottom + 25}px`
    }, [show])

    return (
        <>
            <button
                type="submit"
                ref={button}
                onClick={() => setShow(prev => !prev)}
            >
                Click Here
            </button>
            {show && (
                <div style={{ position: 'absolute' }} ref={popup}>
                    This is a popup
                </div>
            )}
        </>
    )
}
