import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState("")

  function getData(){
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setImage(json.message)
      })
  }

  return (
    <>
      <button onClick={getData}> Click Here </button>
      <div>
        <h2>Dogs to make your day</h2>
      {image && <img src={image} alt=''/>}
      </div>
    </>
  )
}

export default App
