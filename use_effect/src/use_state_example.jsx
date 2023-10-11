import React, { useEffect, useState } from 'react'

export default function App() {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])
    // useEffect takes a second parameter which accepts an Array
    // the useEffect hook will only ever fire whenever the elements
    // within this array change

    // useEffect(() => {
    // console.log('render type changed :=>')
    // }, [resourceType])

    // As opposed to the console.log('render :=>') outside of the hook
    // which re renders whenever any of the page elements change(I think...?)

    // console.log('render :=>')

    // You can circumvent this behavior by passing an
    // unchanging element to the useEffect hook (in this case an empty array),
    // causing it only to run once:

    // useEffect(() => {
    // console.log('onMount :=>')
    // }, [])

    // Here is a slightly more practical example using the jsonplaceholder API
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
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
            {/* And here we have the returned json */}
            {/* Note the use if the id as key, do not use array indexes as keys*/}
            {items.map(item => {
                return <pre key={item.id}>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}
