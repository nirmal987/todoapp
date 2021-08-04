import React, { useState } from "react";


function App() {
  const[inputItem,setInput]=useState('')
  const[itemList ,setItemlist]=useState([])
  const itemEvent=(event)=>{
    setInput(event.target.value)}
    const listEvent=()=>{
      setItemlist((olditems)=>{
        return[...olditems,inputItem]
      })
      setInput('')
    }

  
  return (
    <div>
    <h1>Todo list</h1>
      <input type='text' placeholder='Type...'  value={inputItem}onChange={itemEvent}></input>
     
     <button onClick={listEvent}> Click Me</button>
     <ul>
     {itemList.map((itemval)=>{
        return <li>{itemval}</li>
     })}
     </ul>
    
    </div>
    
  );
}

export default App;
