export function TodoCard(props) {
    const { todo, handlePriorityTodo, handleEditTodo, handleDeleteTodo, handleCompleteTodo, todoIndex, priority } = props

    const lowPriorityStyle = {
        background: 'green',
    };

    const mediumPriorityStyle = {
        background: 'yellow',
    };

    const highPriorityStyle = {
        background: 'red',
    };

    const completePriorityStyle = {
        background: 'grey',
    };

    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled={todo.complete} onClick={() => {
                    handleCompleteTodo(todoIndex)
                }}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleEditTodo(todoIndex)
                }}>
                    <h6>Edit</h6>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
                <button disabled={todo.complete} style={todo.complete ? completePriorityStyle : todo.priority == 'Low' ? lowPriorityStyle : todo.priority == 'Medium' ? mediumPriorityStyle : highPriorityStyle} 
                        onClick={() => {
                            handlePriorityTodo(todoIndex)
                        }}>
                    <h6>Priority</h6>
                </button>
            </div>
        </div>
    )
}