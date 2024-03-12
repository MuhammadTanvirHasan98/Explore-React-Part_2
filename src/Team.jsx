import { useState } from "react"

export default function Team(){

    const[team, updateTeam]=useState(11)

  const teamStyle ={
     border:"2px solid purple",
     margin:'10px',
     padding:'20px',
     borderRadius:'20px'
  }
   
  const addPlayer = ()=>{
     const newTeam = team+1;
     updateTeam(newTeam)
  }
  const removePlayer = ()=>{
     const newTeam = team-1;
     updateTeam(newTeam)
  }


   return(
     <div style={teamStyle}>
        <h1>Team: {team}</h1>
        <button onClick={addPlayer}>Add Player</button>
        <button onClick={removePlayer}>Remove Player</button>
     </div>
   )
}