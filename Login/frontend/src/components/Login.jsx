import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Login = () => {

    const[name,setName]=useState()
    const[password,setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/login",{name,password})
        .then(result=>{console.log(result)
            if(result.data==="success"){
                navigate('/')
            }
            
        })
        .catch(err=>{
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
        <input type="password" placeholder="Create password" 
        onChange={(e)=>setPassword(e.target.value)}required/>
      </div>
      
      <div className="policy">
        <input type="checkbox"/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div className="input-box button">
        <input type="Submit" value="Login"
        />
      </div>
      <div className="text">
        <h3>Do not have an account? <Link to='/sign'>Sign in</Link></h3>
      </div>
    </form>
  </div>
  )
}

export default Login
