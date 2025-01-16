import { useState } from 'react'

export function TodoInput(props) {
    const { handleAddTodo, todoInput, setTodoInput } = props
    return (
        <div className="input-container">
            <input value={todoInput} onChange={(e) => {
                setTodoInput(e.target.value)
            }}placeholder="Add task" />
            <button onClick = {() => { 
                if (!todoInput) { return }
                handleAddTodo(todoInput)
                setTodoInput('')
            }}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}