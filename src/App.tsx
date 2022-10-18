import {BrowserRouter ,Routes, Route } from 'react-router-dom'
import UserPage from './components/UserPage';
import TodoPage from './components/TodoPage';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';
function App() {
 
  return (
    <BrowserRouter>
      <div>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/todos'>Todos</NavLink>
      </div>
         <Routes>
          <Route path='/users' element={<UserPage/>} />
          <Route path='/users/:id' element={<UserItemPage/>} />
          <Route path='/todos/:id' element={<TodoItemPage/>} />
          <Route path='/todos' element={<TodoPage/>} />
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
