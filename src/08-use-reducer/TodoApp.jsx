import { TodoList, TodoAdd } from "./"
import { useTodos } from "../hooks";



export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo } = useTodos();

    return (
        <>
            <h1>TodoApp: {todosCount}, <small>pendientes {pendingTodosCount}</small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onRemoveTodo={handleRemoveTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}

