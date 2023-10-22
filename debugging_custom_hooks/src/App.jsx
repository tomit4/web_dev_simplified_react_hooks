import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage.jsx'

export default function App() {
    const [firstName, setFirstName] = useLocalStorage('firstName', 'Kyle')
    const [lastName, setLastName] = useState('Cook')
    return (
        <>
            First:{' '}
            <input
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <input
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
        </>
    )
}
