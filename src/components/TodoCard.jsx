export function TodoCard(props) {
    const { todo, handleEditTodo, handleDeleteTodo, handleCompleteTodo, todoIndex, priority, setPriority, priorityIndex, setPriorityIndex } = props

    const priorities = ['Low', 'Medium', 'High']

    const lowPriorityStyle = {
        background: 'green',
    };

    const mediumPriorityStyle = {
        background: 'yellow',
    };

    const highPriorityStyle = {
        background: 'red',
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
                <button style={priority == 'Low' ? lowPriorityStyle : priority == 'Medium' ? mediumPriorityStyle : highPriorityStyle} 
                        onClick={() => {
                            setPriorityIndex((priorityIndex + 1) % 3)
                            setPriority(priorities[priorityIndex])
                        }}>
                    <h6>Priority</h6>
                </button>
            </div>
        </div>
    )
}