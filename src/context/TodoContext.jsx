/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";


export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {

    const [title, setTitle] = useState('')
    const [todos, setTodos] = useState([])


    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.length < 5) return false;

        if (title.trim() !== '') {
            const newTodo = {
                id: crypto.randomUUID(),
                title: title,
                completed: true
            }

            setTodos([
                ...todos,
                newTodo
            ]);

            setTitle('')
        }
    }


    const handleDelete = (todoId) => {
        //filtramos la lista para eliminar el id seleccionado
        const listraFiltrada = todos.filter(todo => todo.id !== todoId)
        setTodos(listraFiltrada)
    }




    return (
        <TodoContext.Provider
            value={{
                handleChange,
                handleSubmit,
                handleDelete,
                todos,
                title
            }
            }>
            {children}
        </TodoContext.Provider>

    )
}