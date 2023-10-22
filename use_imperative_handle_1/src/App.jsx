import { useState, useRef } from 'react'
import CustomInput from './CustomInput'

export default function App() {
    const [value, setValue] = useState('red')
    const inputRef = useRef()

    return (
        <>
            <CustomInput
                ref={inputRef}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <br />
            <button type="submit" onClick={() => inputRef.current.alertHi()}>
                Focus
            </button>
        </>
    )
}
