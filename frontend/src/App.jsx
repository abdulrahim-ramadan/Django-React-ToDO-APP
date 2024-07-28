import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import ToDos from './components/Todo';  
import CreateToDo from './components/CreatTodo';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos from API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/todo/")
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  // Create todo
  const createToDoEvent = (newToDo) => {
    setTodos([...todos, newToDo]);
  };

  // Update todo status
  const updateTodoEvent = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  // Handle updating todo status
  const handleToDoUpdate = (todo) => {
    const updatedStatus = todo.status === 'DONE' ? 'IN PROGRESS' : 'DONE';

    fetch(`http://127.0.0.1:8000/todo/${todo.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: updatedStatus, title: todo.title })
    })
    .then(response => response.json())
    .then(updatedTodo => updateTodoEvent(updatedTodo));
  };

  // Handle deleting a todo
  const handleToDoDelete = (id) => {
    fetch(`http://127.0.0.1:8000/todo/${id}/`, {
      method: "DELETE"
    })
    .then(() => setTodos(todos.filter(todo => todo.id !== id)));
  };

  return (
    <div className='container'>
      <div className='row'>
        <CreateToDo onCreateToDo={createToDoEvent} />
        <div className='col-lg-6 mx-auto my-5'>
          <ToDos todos={todos} handleToDoUpdate={handleToDoUpdate} handleToDoDelete={handleToDoDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;

