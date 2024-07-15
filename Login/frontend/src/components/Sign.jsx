import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Sign = () => {

  const [name,setName]=useState()
  const[email, setEmail]=useState()
  const[password, setPassword]=useState()
const navigate=useNavigate()


  const handleSubmit=(e)=>{
    e.preventDefault()
   axios.post('http://localhost:3000/sign',{name,email,password})
   .then((result=>{
    console.log(result)
    navigate('/login')
   }))
   .catch((err)=>{
    console.log(err)
   })
  }

  return (
    <div className="wrapper">
    <h2>Registration</h2>
    <form action="#" onSubmit={handleSubmit}>
      <div className="input-box">
        <input type="text" placeholder="Enter your name" 
        onChange={(e)=>setName(e.target.value)}
        required/>
      </div>
      <div className="input-box">
        <input type="text" placeholder="Enter your email" 
        onChange={(e)=>setEmail(e.target.value)}
        required/>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Create password" 
        onChange={(e)=>setPassword(e.target.value)}required/>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Confirm password" required/>
      </div>
      <div className="policy">
        <input type="checkbox"/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div className="input-box button">
        <input type="Submit" value="Register Now"
        />
      </div>
      <div className="text">
        <h3>Already have an account? <Link to='/login'>Login</Link></h3>
      </div>
    </form>
  </div>
  )
}

export default Sign
