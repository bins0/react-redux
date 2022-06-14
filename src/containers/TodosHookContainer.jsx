import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todos from '../components/Todos'
import { changeInput } from '../modules/todos'

const TodosHookContainer = () => {
    const { input, todos } = useSelector((state) => (
        {
        input: state.todos.input,
        todos: state.todos.todos
        }
    ))
    const dispatch = useDispatch();
    const onChangeInput = useCallback(
        (input)=> dispatch(changeInput(input)),[dispatch]
    
    )
    const onInsert = useCallback((text) => dispatch(insert(text)) )
    return <Todos input={input} todos={todos}
    onChangeInput={onChangeInput} onInsert ={onInsert} 
    onToggle={onToggle} onRemove={onRemove} 
    />
    };
    const onInsert = useCallback((text)=>dispatch(insert(text)),[dispatch])
    const onToggle = useCallback((id)=>dispatch(toggle(id)),[dispatch])
    const onRemove = useCallback((id)=> dispatch(remove(id)),[dispatch]) 

    
   

export default TodosHookContainer