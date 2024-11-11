import { useState } from 'react'

// #region componenti
import Header from './components/Header'
import Main from './components/Main'
// #endregion componenti

// #region stile
import './App.css'
// #endregion stile

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
