 const TodoReducer =(state,action)=>{
    switch (action.type){
        case "SAVE":
            return{
                ...state,
                todos:[action.payload,...state.todos]
            }

            case "DELETE":
                return{
                    ...state,
                    todos:state.todos.filter((item)=>item.id !==action.payload)

                }

                case "EDIT":
                    return{
                        ...state,
                        edit:{todo:action.payload,editMode:true}

                    }

                    case "UPDATE":
                        return{
                            ...state,
                            todos:state.todos.map((item)=>item.id=== action.payload.id? action.payload :item),
                            edit :{todo:{},editMode:false}
                        }

        default :
        return state 
    }
}
export default TodoReducer