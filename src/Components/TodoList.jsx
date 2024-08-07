import TodoCard from "./TodoCard"

function TodoList(props) {
    const { todos } = props
    return (
        <ul className="main">
            {
                todos.map((todo, Todoindex) => {
                    return (
                        <TodoCard {...props} key={Todoindex} index={Todoindex}>
                            <p>{todo}</p>
                        </TodoCard>
                    )
                })
            }
        </ul>
    )
}

export default TodoList