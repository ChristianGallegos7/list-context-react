import { Todo } from "./Todo";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoApp = () => {

    const { handleSubmit, handleChange, todos, title } = useContext(TodoContext);


    return (
        <div className="container mt-5">
            <h1>Todo List</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control w-50" placeholder="Ingrese su tarea" value={title} onChange={handleChange} min='3' />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary mx-5">Add Todo</button>
                        </div>
                    </div>
                </form>

                <div>
                    <ul className="list-group">
                        {todos.map((todo) => (
                            <Todo key={todo.id} todo={todo} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
