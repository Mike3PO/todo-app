export function Header(props) {
    const { todos, selectedTab } = props
    const filterTodosList = selectedTab === 'All' ? 
        todos : 
        selectedTab === 'Completed' ? 
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)
    const numTodosInList = filterTodosList.length
    const isPlural = numTodosInList != 1 ? 's' : ''

    return (
        <header>
            <h1 className="text-gradient">You have {numTodosInList} {selectedTab != 'All' && (selectedTab)} task{isPlural}.</h1>
        </header>
    )
}