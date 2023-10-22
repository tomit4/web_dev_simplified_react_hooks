import { useState, useCallback } from 'react'
import List from './List.jsx'

export default function App() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    /*
     * Note that this example of useCallback()
     * looks extremely similar to the way useMemo()
     * is used. The major difference being that useMemo()
     * returns the value of the function passed to it,
     * as opposed to useCallback() which returns the
     * function itself, this can be useful when utilizing
     * parameters within the returned function.
     * */
    // const getItems = useMemo(() => {}

    const getItems = useCallback(
        incrementor => {
            if (isNaN(number)) {
                setNumber('')
            }
            return [
                { id: 0, number: String(number + incrementor) },
                { id: 1, number: String(number + incrementor + 1) },
                { id: 2, number: String(number + incrementor + 2) },
            ]
        },
        [number],
    )

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333',
    }

    return (
        <div style={theme}>
            <input
                type="string"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button
                type="submit"
                onClick={() => setDark(prevDark => !prevDark)}
            >
                Toggle theme
            </button>
            <List getItems={getItems} />
        </div>
    )
}
