import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import ListItems from './Components/ListItems'
import ListGroup from './Components/ListGroup'
import { TodoProvider } from './Contex/TodoContext'

const App = () => {
  return (
   <TodoProvider>
   <Navbar/>
   <div className="container p-5">
    <Form/>
    <ListGroup/>
   </div>


   </TodoProvider>
  )
}

export default App