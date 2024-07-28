// Import React and useState
import { useState } from "react";

// Component: CreateToDo
const CreateToDo = ({ onCreateToDo }) => {
    // State for title and status
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('INPROGRERSS');

    // Function to handle the creation of a new todo item
    const createToDo = (e) => {
        e.preventDefault(); // Prevent page refresh

        const newToDo = { title, status };

        // Sending data to the server
        fetch("http://127.0.0.1:8000/todo/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newToDo)
        })
        .then(response => response.json())
        .then(data => onCreateToDo(data))
        .catch(error => console.error('Error creating todo:', error));
        setTitle('');
        setStatus('INPROGRERSS')
    }

    return (
        <div className="container mt-4">
            <form className="row g-3 align-items-center w-100" onSubmit={createToDo}>
                <div className="col-8">
                    <label htmlFor="titleInput" className="visually-hidden">Title</label>
                    <input
                        type="text"
                        id="titleInput"
                        className="form-control"
                        placeholder="Enter Todo Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="col-2">
                    <label htmlFor="statusSelect" className="visually-hidden">Status</label>
                    <select
                        id="statusSelect"
                        className="form-select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="DONE">DONE</option>
                        <option value="INPROGRERSS">INPROGRERSS</option>
                    </select>
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
                </div>
            </form>
        </div>
    );
};

export default CreateToDo;
