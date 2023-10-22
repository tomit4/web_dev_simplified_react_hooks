import { useMemo, useEffect, useDeferredValue } from 'react'

export default function List({ input }) {
    const LIST_SIZE = 20000
    /* A simple hook, similar in nature to debouncing, the useDeferredValue()
     * hook essentially waits until our input has remained unchanged for
     * a certain amount of time*/
    const deferredInput = useDeferredValue(input)
    const list = useMemo(() => {
        const l = []
        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l
    }, [deferredInput])

    // Demonstrating the subtle time difference using useEffect to watch both
    useEffect(() => {
        console.log(`Input: ${input}\nDeferred: ${deferredInput}`)
    }, [input, deferredInput])
    /* SAMPLE OUTPUT typing 'asdf' very quickly:
    Input: a
    Deferred: List.jsx:19:16
    Input: as
    Deferred: List.jsx:19:16
    Input: asd
    Deferred: List.jsx:19:16
    Input: asdf
    Deferred: List.jsx:19:16
    Input: asdf
    Deferred: asdf
    */

    return list
}
