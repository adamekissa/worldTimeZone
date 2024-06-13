import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeZone from './TimeZone.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TimeZone />
      </div>
    </>
  )
}

export default App
