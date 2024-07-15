import { useState } from 'react'
import './App.css'
import Sign from './components/Sign.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
