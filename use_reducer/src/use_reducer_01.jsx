import { useReducer } from 'react'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state
    }
}

export default function App() {
    /* useReducer is useful for handling more complex state
     * than is what presented here
     * That said, useReducer takes a function as it's first
     * argument, and an object which keeps track of the
     * state(s) that we expect to change on re render of the page
     * The state, and dispatch variables destructured from the return
     * value of useReducer()  hold the state of the count
     * (see reducer function above), and also dispatch()
     * which calls the reducer function*/
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    function increment() {
        dispatch({ type: ACTIONS.INCREMENT })
    }

    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT })
    }

    return (
        <>
            <button type="submit" onClick={decrement}>
                -
            </button>
            <span>{state.count}</span>
            <button type="submit" onClick={increment}>
                +
            </button>
        </>
    )
}
