import { useId } from 'react'

export default function EmailForm() {
    /* The useId() hook generates unique ids
     * (always the same on every refresh).
     * React assigns these ids using :r1: syntax,
     * preventing use of native JS DOM methods
     * like querySelector*/

    const id = useId()
    return (
        <>
            <label htmlFor={`${id}-email`}>Email</label>
            <input id={`${id}-email`} type="email" />
            <br />
            <label htmlFor={`${id}-name`}>Name</label>
            <input id={`${id}-name`} type="text" />
        </>
    )
}
