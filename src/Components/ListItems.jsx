import React, { useContext } from 'react'
import TodoContext from '../Contex/TodoContext'

const ListItems = ({todo}) => {

  const {DeleteTodo ,EditTodo}=useContext(TodoContext)
  return (
    <li className="list-group-item rounded-0">{todo.text}
        <button className="btn btn-danger float-end btn-sm mx-1" onClick={()=>DeleteTodo(todo.id)}>Delete</button>
        <button className="btn btn-warning  btn-sm float-end" onClick={()=>EditTodo(todo)}>Edit</button>
    </li>
  )
}

export default ListItems