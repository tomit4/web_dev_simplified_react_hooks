import { useState, useEffect, useCallback, useDebugValue } from 'react'

function getSavedValue(key, initialValue) {
    console.log('key :=>', key)
    const savedValue = localStorage.getItem(key)
    if (savedValue?.length) return JSON.parse(savedValue)

    if (initialValue instanceof Function) return initialValue()
    return initialValue
}

export function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, defaultValue)
    })

    // Only useful in custom hooks! Cannot be used within
    useDebugValue([key, value])

    /* To specifically tell react to use this hook only
     * in developer mode, you can pass a function as a
     * second argument to the useDebugValue() hook. */
    // useDebugValue(value, v => getValuesSlowly(v))
    // function getValuesSlowly(value) {
    // for (let i = 0; i < 3000000000; i++) {}
    // return value
    // }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    const remove = useCallback(() => {}, [])

    return [value, setValue, remove]
}
