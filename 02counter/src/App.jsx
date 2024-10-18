import { useState } from 'react'  //hook comes from here
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//React decides that what will be updated in UI
//the data is updated using hooks

function App() {

  let [counter, setCounter] = useState(15)
  //counter is value, setCounter is function this makes the same as le counter
  //by using this where there is counter it updates its value every where
  //set counter takes the new value of the counter
  //we can name setcounter anything we want

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1  
    if(counter < 20){
      setCounter(counter + 1)
    } 
    console.log("clicked", Math.random());
    
  }

  const removeVlaue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }


  return (
    <>
    <h1> React </h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value</button>
    <br />
    <button
    onClick={removeVlaue}
    >Remove value</button>
    </>
  )
}       

export default App
