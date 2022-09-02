import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Album from './components/Album'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Album/>
    </div>
  )
}

export default App
