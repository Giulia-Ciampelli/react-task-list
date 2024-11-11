import { useState } from 'react'

// #region componenti
import Header from './components/Header'
// #endregion componenti

// #region stile
import './App.css'
// #endregion stile

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
