
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'


function App() {

  
  function handleClick  (){
     alert('You Clicked Me!')
  }

  const handleClick2 = ()=>{
    alert("Button 2 clicked")
  }
  
  const addToFive = (num)=>{
    alert(5+num)
  }
  

  return (
    <>
    
    <Users></Users>
     <Team></Team>
     <Counter></Counter>


      <h1>React Core Concepts 2</h1>
       {/* <button onclick="handleClick()">Click me</button> 
        //It's about normal HTML//
       */}
       <button onClick={handleClick}>Click me</button>
       <button onClick={handleClick2}>Click me 2</button>
       <button onClick={()=> alert("Third button clicked")}>Click me 3</button>
       <button onClick={()=> addToFive(5)}>Add To Five</button>
    </>
  )
}

export default App
