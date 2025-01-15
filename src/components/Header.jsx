export function Header(props) {
    const { todos } = props
    const todosLength = todos.length
    const isPlural = todosLength != 1 ? 's' : ''

    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open task{isPlural}.</h1>
        </header>
    )
}