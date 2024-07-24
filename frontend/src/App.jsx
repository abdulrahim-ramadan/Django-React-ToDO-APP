import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'

import ToDos from './components/Todo';  
import CreateToDo from './components/CreatTodo';




function App() {
  
  const [todos, setTodos] = useState([
    { title: "Todo 1", status: "INPROGRESS" },
    { title: "Todo 2", status: "DONE" },
    { title: "Todo 3", status: "INPROGRESS" }
]);
// get todos from API

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
