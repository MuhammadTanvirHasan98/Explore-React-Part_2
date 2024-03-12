import { useEffect, useState } from "react"
import User from "./User"

export default function Users(){
  const userStyle = {
    border:"2px solid purple",
    borderRadius:"20px",
    margin:"20px",
    padding:"20px"
 }

  const [users, setUsers]= useState([])
  // console.log(users);

  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then( res => res.json())
  //   .then(data => console.log(data))

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then(data => setUsers(data))

  }, [])

  // console.log(users)

  return(
    
     <div style={userStyle}>
       <h3>Users: {users.length}</h3>
       {
        users.map(user=> <User person={user}></User>)
        // users.map(user=> console.log(user))// 
        // here user is an each object -> total objects 10 in this array of API
       }
     </div>
  )
}

/**
 * 1) Declare a state to hold the data
 * 2) useEffect with call back function and dependency array
 * 3) Use fetch to load data
 * 4) set loaded data to the state
 */