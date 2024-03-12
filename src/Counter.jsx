import { useState } from "react"


export default function Counter(){
  const[count, setCount]= useState(0);

  const plusValue = () =>{
    const newCount = count+1;
     setCount(newCount)
  }
  const removeValue = () =>{
    const newCount = count-1;
    setCount(newCount)
  }
   return(
      <div style={
      {border:"2px solid yellow",
       padding:'40px',
       margin:"20px"
       }}>
         <h3>Counter: {count}</h3>
         <button onClick={plusValue}>Add value</button>
         <button onClick={removeValue}>Reduce value</button>
      </div>
   )
}