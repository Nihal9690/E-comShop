import React, { useState } from 'react'
import UserContext2 from './UserContext2'
const UserState2 = ({children}) => {


    let UserData = JSON.parse(localStorage.getItem('Login'))
    const[searchValue , setsearchValue]=useState('')
    const [user , setUser]=useState({
        email:UserData ? UserData.email:'',
        login:UserData ? UserData.login : false
        
    })
  return (
    <UserContext2.Provider value = {{user , setsearchValue, searchValue ,setUser }}>
      

{children}
    </UserContext2.Provider>
  )
}

export default UserState2
