import { useEffect, useState } from 'react'
export default function List({ getItems }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(5))
        console.log('Updating Items')
    }, [getItems])

    return items.map(item => <div key={item.id}>{item.number}</div>)
}
