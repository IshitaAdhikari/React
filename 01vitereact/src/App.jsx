
import Abc from "./abc"
function App() {
  const username = "coding"

  return (
    //to retrun only one lement but in it we can add other elements by fragmenting it 
    //it is known as fragment
    //where there is curly braces we treat it as a variables
    //it is also known as evaluated expression
    <> 
    <Abc/>
    <h1> learing react {username} </h1> 
    <p> testing fragmenting</p>
    </>
    
  )
}

export default App

// the name of function should be capital
// name of components should be jsx in vite
