// NOTE: startTransition is imported here when used within classComponents
import { useState, useTransition } from 'react'

export default function App() {
    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    /* useTransition is a powerful hook that prioritizes
     * certain events over others, creating a series of
     * renders after a higher priority render.
     * In this example, the form input should would slow down
     * significantly if run without the setTransition hook.*/

    const LIST_SIZE = 20000

    function handleChange(e) {
        setInput(e.target.value)
        // startTransition declares low priority render (do all else first)
        startTransition(() => {
            const l = []
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(e.target.value)
            }
            setList(l)
        })
    }

    return (
        <>
            <input type="text" value={input} onChange={handleChange} />
            {/* NOTE: isPending is boolean value that determines whether or 
            not the startTransition() function has completed or not */}
            {isPending
                ? ' Loading...'
                : list.map((item, index) => {
                      return <div key={index}>{item}</div>
                  })}
        </>
    )
}
