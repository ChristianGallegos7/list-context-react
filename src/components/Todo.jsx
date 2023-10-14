/* eslint-disable react/prop-types */

import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const Todo = ({ todo }) => {

    const { handleDelete } = useContext(TodoContext);

    const handleDeleteClick = () => {
        handleDelete(todo.id);
    }

    return (
        <div className="d-flex justify-content-between align-items-center mb-3 border p-3">
            <h3><strong>Title:</strong> {todo.title}</h3>
            <button className="btn btn-danger" onClick={handleDeleteClick}>Eliminar</button>
        </div>
    )
}
