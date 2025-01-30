export function Header(props) {
    const { todos, selectedTab } = props
    const todosLength = todos.length
    const isPlural = todosLength != 1 ? 's' : ''

    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} {selectedTab != 'All' && (selectedTab)} task{isPlural}.</h1>
        </header>
    )
}