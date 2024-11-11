import { useState } from 'react'

// #region componenti
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
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
      <Footer />
    </>
  )
}

export default App
