import { useState } from "react";

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
            <ul className="list-group">
                {todos.map((todo, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{todo.title}</span>
                        <button
                            className={'btn btn-sm border'}
                            onClick={() => handleToDoUpdate(todo)}
                        >
                            {todo.status}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDos;
