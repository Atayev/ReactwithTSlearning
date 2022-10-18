import React, { FC } from 'react'
import { ITodo } from '../types/types'
interface TodoItemProps {
  todo: ITodo
  onClick:(todo:ITodo)=>void
}
const TodoItem:FC<TodoItemProps> = ({todo,onClick}) => {
  return (
      <div onClick={()=>onClick(todo)}>
          <input type="checkbox" checked={todo.completed} />
           <div>
          {todo.id} , {todo.title}
          </div>
    </div>
  )
}

export default TodoItem