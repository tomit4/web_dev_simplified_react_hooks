import { ACTIONS } from './ACTIONS'

export default function Todo({ todo, dispatch }) {
    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
                {todo.name}
            </span>
            <button
                onClick={() =>
                    dispatch({
                        type: ACTIONS.TOGGLE_TODO,
                        payload: { id: todo.id },
                    })
                }
                type="submit"
            >
                Toggle
            </button>
            <button
                onClick={() =>
                    dispatch({
                        type: ACTIONS.DELETE_TODO,
                        payload: { id: todo.id },
                    })
                }
                type="submit"
            >
                Delete
            </button>
        </div>
    )
}
