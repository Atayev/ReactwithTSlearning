import React, { FC,useEffect,useState } from 'react'
import { ITodo } from '../types/types'
import { useParams,useNavigate } from 'react-router-dom'

type TodoItemPageProps = {
    id:string
}
const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo>()
    const params = useParams<TodoItemPageProps>()
    const navigate =useNavigate()
    useEffect(() => {
        fetchTodo()
        // eslint-disable-next-line
    }, [])
    
    const fetchTodo =async() => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/'+params.id)
        const data = await response.json()
        setTodo(data)
        console.log(data)
      } catch (e) {
        alert(e)
      }
    }
  return (
      <div>
          <button onClick={()=>navigate('/todos')}>
                Back
          </button>
          <h1>{todo?.title}</h1>
          <p>Completed todo</p>
          <input type='checkbox' checked={todo?.completed} />
         
    </div>
  )
}

export default TodoItemPage