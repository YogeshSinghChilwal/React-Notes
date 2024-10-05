//~ 4 importing UserContext and sending data to setUser method in provider

import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext);      //* setUser is a method from userContextProvider

    const handleClick = (e) => {
        e.preventDefault()

        setUser({userName, password})

    }

  return (
    <div>
      <h2>Login</h2>

      <input type="text" 
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder='User Name' />

      <input type="text"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Password' />
      <button type='submit' onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Login
