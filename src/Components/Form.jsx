import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../Contex/TodoContext'

const Form = () => {

  const {SaveTodo ,edit,UpdateTodo}=useContext(TodoContext)
  // console.log(SaveTodo)

  const [text,setText]=useState("")

  const HandleSubmit =(e)=>{
    e.preventDefault()
  if(edit.editMode){
    UpdateTodo(edit.todo.id,text)

  }else{
    SaveTodo(text)
  }
    setText("")
  }
  useEffect(()=>{
    setText(edit.todo.text)

  },[edit])
  return (
   <form onSubmit={(e)=>HandleSubmit(e)}>
    <input type="text" className="form-control my-2 rounded-0 "  
     placeholder='Enter Todo here...' 
      onChange={(e)=>setText(e.target.value)} value={text} required/>
    <button className="btn btn-success rounded-0 w-100">Save</button>
   </form>
  )
}

export default Form