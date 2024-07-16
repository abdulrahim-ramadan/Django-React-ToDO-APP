import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'

import ToDos from './components/Todo';  
import CreateToDo from './components/CreatTodo';




function App() {

  const [todos, setTodos] = useState([]);
  //get todos from API
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/todo/")
    .then(response => response.json())
    .then(data => setTodos(data))
  })

  return (
    <div className='container '>
      <div className='row'>
        <div className='col-lg-6 mx-auto my-5'>
        <CreateToDo />
        <ToDos todos={todos} setTodos={setTodos} />
        </div>
      </div>

    </div>
  )
}

export default App
