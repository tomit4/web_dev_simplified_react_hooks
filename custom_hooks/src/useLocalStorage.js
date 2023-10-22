import { useEffect, useState } from 'react'

function getSavedValue(key, initialValue) {
    const savedValue = localStorage.getItem(key)
    if (savedValue.length) return JSON.parse(savedValue)

    if (initialValue instanceof Function) return initialValue()
    return initialValue
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}
