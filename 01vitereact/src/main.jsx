import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1> Custom app</h1>
    </div>
  )
}

const anotherUser = "abc"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  //injecting another 
  anotherUser
)

//we are here using React render
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
   

//JSX is JS mix with HTML
