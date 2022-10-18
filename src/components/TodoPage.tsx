import React, { FC , useState,useEffect } from 'react'
import { ITodo } from '../types/types'
import List from './List'
import TodoItem from './TodoItem'
import { useNavigate } from 'react-router-dom'
const TodoPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const navigate = useNavigate()
    useEffect(() => {
      fetchTodo()
    }, [])
    
    const fetchTodo =async() => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        const data = await response.json()
        setTodos(data)
        console.log(data)
      } catch (e) {
        alert(e)
      }
    }
    return (
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem onClick={()=>navigate('/todos/'+todo.id)} todo={todo} key={todo.id} />} />
  )
}

export default TodoPage