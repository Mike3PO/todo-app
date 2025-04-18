import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

import { useState, useEffect } from 'react'

function App() {
  // const todos = [
  //   { input : 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to grandma', complete: true},
  // ]

  const [todos, setTodos] = useState([
    { input : 'Hello! Add your first todo!', complete: true, priority: 'Low' }
  ])

  const [todoInput, setTodoInput] = useState('')


  const [selectedTab, setSelectedTab] = useState('All')

  /*
  const priorities = ['Low', 'Medium', 'High']
  */

  //Change Priority
  function handlePriorityTodo(index) {
    let newTodoList = [...todos]
    let priorityTodo = todos[index]
    priorityTodo['priority'] = priorityTodo['priority'] == 'Low' ? 'Medium' : priorityTodo['priority'] == 'Medium' ? 'High' : 'Low'
    newTodoList[index] = priorityTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false, priority: 'Low' }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    // update/edit/modify
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleEditTodo(index) {
    // update inputText to current text
    // delete current todo
    // then allow adding todo again
    const inputValue = todos[index].input
    setTodoInput(inputValue)
    handleDeleteTodo(index)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index 
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    if(!localStorage) { return }
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) 
      { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header selectedTab= {selectedTab} todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList handlePriorityTodo={handlePriorityTodo} handleEditTodo={handleEditTodo} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}/>
      <TodoInput todoInput={todoInput} setTodoInput={setTodoInput} handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
