import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  fetch("http://localhost:4000/api/message")
  .then((res) => res.json())
  .then((data) => setMessage(data?.message))

  return (
    <>
      <h1>Welcome to Vid Nik Frontend</h1>
      <p>
        {message}
      </p>
    </>
  )
}

export default App
