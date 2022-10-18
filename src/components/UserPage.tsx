import React,{FC,useState,useEffect} from 'react'
import List from './List';
import { UserItem } from './UserItem';
import { IUser } from '../types/types';
import { useNavigate } from 'react-router-dom';
const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData =async() => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    } catch (e) {
      alert(e)
    }
  }
 
  return (
    <List items={users} renderItem={(user: IUser) => <UserItem onClick={(user)=>navigate('/users/'+user.id)} user={user} key={ user.id } />} />
  )
}

export default UserPage