import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Create from './components/Create'
import Delete from './components/Delete'
import Home from './components/Home'
import Edit from './components/Edit'
import Show from './components/Show'


const App = () => {
  return (
   <Routes>
    <Route path='/books/create' element={<Create/>} />
    <Route path='/books/delete/:id' element={<Delete/>} />
    <Route path='books/edit/:id' element={<Edit/>} />
    <Route path='/' element={<Home/>} />
    <Route path='/books/details/:id' element={<Show/>} />

    
   </Routes>
  )
}

export default App
