import { createContext, useReducer } from "react";
import TodoReducer from "./TodoReducer";

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {

  const initialState = {
    todos: [],

    edit: { todo: {}, editMode: false }
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState)

  const SaveTodo = (text) => {
    const NewTodo = {
      id: crypto.randomUUID(),
      text
    }
    dispatch({
      type: "SAVE",
      payload: NewTodo,
    })
  }

  const DeleteTodo = (id) => {
    dispatch({
      type: "DELETE",
      payload: id
    })
  }

  const EditTodo = (todo) => {
    dispatch({
      type: "EDIT",
      payload: todo
    })
  }

  const UpdateTodo = (OldId, newText) => {
    dispatch({
      type: "UPDATE", payload: {
        id: OldId,
        text: newText
      }
    })


  }



  return (
    <TodoContext.Provider value={{ ...state, SaveTodo, DeleteTodo, EditTodo, UpdateTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
export default TodoContext