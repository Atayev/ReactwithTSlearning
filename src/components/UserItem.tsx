import React, { FC } from 'react'
import { IUser } from '../types/types'
 interface UserItemProps {
   user: IUser;
   onClick: (user:IUser) => void
}
export const UserItem:FC<UserItemProps> = ({user,onClick}) => {
  return (
           <div onClick={()=>onClick(user)} style={{ padding:15, border:'1px solid gray'}}>
                  {user.id}, {user.name} living in city {user.address.city} in town {user.address.street} 
            </div>
  )
}
