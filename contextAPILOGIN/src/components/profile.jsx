import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)
  //conditional return
  if(!user) return <div>please login</div>

  return <div>Welcome {user.username} your password is {user.password}</div>
}

export default Profile