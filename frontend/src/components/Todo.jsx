import { useState } from "react";
import { FaCheck, FaEdit } from 'react-icons/fa';


const ToDos = ({ todos, setTodos,onUpdateTodo }) => {

    // update todo
    const handleToDoUpdate = (todo) => {

        const updatedStatus = todo.status == "DONE" ? "IN PROGRESS" : "DONE";

        fetch(`http://127.0.0.1:8000/todo/${todo_id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: updatedStatus , title:todo.title })
        })
        .then(response => { 
            return response.json()
            // Hier könntest du die todos aktualisieren, basierend auf der Antwort
        })
        .then(data => {
          onUpdateTodo(data) // todo update
        })
    }

    return (
        <div className="container mt-4">
            <header className="mb-4 text-center">
                <h1 className="project-title">ToDo List Management</h1>
                <p className="project-description">Manage your tasks efficiently and stay organized</p>
            </header>
            <ul className="list-group">
                {todos.map((todo, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="todo-title">{todo.title}</span>
                        <div className="btn-group">
                            <button
                                // className={`btn btn-sm me-2 d-flex align-items-center ${todo.status == 'DONE' ? 'btn-done' : 'btn-progress'}`}
                                // onClick={() => handleToDoUpdate(todo)}

                                 className={`btn btn-sm border ${todo.status == 'DONE' ? 'btn-success' : 'btn-warning'}`}  // button color
                                 onClick={() => handleToDoUpdate(todo)}

                            >
                                <FaCheck className="me-1" />
                                <span>{todo.status === 'DONE' ? 'DONE' : 'IN PROGRESS'}</span>
                            </button>
                            <button
                                className="btn btn-sm btn-edit d-flex align-items-center"
                                onClick={() => handleToDoUpdate(todo)}
                            >
                                <FaEdit className="me-1" />
                                <span>Edit</span>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
    
    export default ToDos;
