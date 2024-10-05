import { useState } from 'react'
import './App.css'
import Sign from './components/Sign.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Landing from './components/Landing.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
