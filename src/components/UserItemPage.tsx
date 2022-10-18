import React, { FC,useState,useEffect } from 'react'
import { IUser } from '../types/types'
import { useParams,useNavigate } from 'react-router-dom'
type UserItemPageProps =  {
    id:string
}
const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageProps>()
    const navigate = useNavigate()
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])
    
    const fetchData =async() => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
        const data = await response.json()
        setUser(data)
      } catch (e) {
        alert(e)
      }
    }
  return (
      <div>
          <button onClick={()=>navigate('/users')}>
                Back
          </button>
          <h1>{user?.name} welcome back!</h1>
          <div>
              {user?.email}
          </div>
          <div>
              {user?.address.city} {user?.address.street} {user?.address.zipcode}
          </div>
      </div>
  )
}

export default UserItemPage