import React, { useContext } from 'react'
import ListItems from './ListItems'
import TodoContext from '../Contex/TodoContext'

const ListGroup = () => {

  const {todos}=useContext(TodoContext)
  // console.log(todos)
  return (
  <ul className="list-group my-2">
  {
    todos.map((todo)=>   <ListItems key={todo.id} todo={todo}/> )
  }

  </ul>
  )
}

export default ListGroup