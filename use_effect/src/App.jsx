import React, { useEffect, useState } from 'react'

export default function App() {
    const [resourceType, setResourceType] = useState('posts')
    useEffect(() => {
        console.log('resource changed :=>')
        // this return code actually runs prior to the console.log() above
        // very essentially it is cleaning up any memory still being used
        // in application state
        return () => {
            console.log('return from resource change :=>')
        }
    }, [resourceType])

    return (
        <>
            <div>
                <button type="submit" onClick={() => setResourceType('posts')}>
                    Posts
                </button>
                <button type="submit" onClick={() => setResourceType('users')}>
                    Users
                </button>
                <button
                    type="submit"
                    onClick={() => setResourceType('comments')}
                >
                    Comments
                </button>
            </div>
            <h1>{resourceType}</h1>
        </>
    )
}
