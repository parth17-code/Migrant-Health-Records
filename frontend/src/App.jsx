import { useState } from 'react'
import './App.css'
import LoginForm from './portals/migrant/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginForm></LoginForm>
    </>
  )
}

export default App
