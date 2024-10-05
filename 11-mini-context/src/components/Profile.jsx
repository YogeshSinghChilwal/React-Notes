import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


const Profile = () => {

    const {user} = useContext(UserContext)

    if(!user)return <div>Please Login First</div>


  return (
    <div>
      <h2>Welcome {user.userName}</h2>
    </div>
  )
}

export default Profile
