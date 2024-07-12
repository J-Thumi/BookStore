import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Backbtn from '../assets/Backbtn'
import Spinner from '../assets/Spinner'
const Delete = () => {
    const[loading,setloading]=useState(false)
    // const[book,setBook]=useState('')
const navigate=useNavigate()
const {id}=useParams()

const handleDelete=()=>{
    setloading(true)
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(res=>{
        setloading(false)
        navigate("/")
    })
    .catch((err)=>{
        console.log(err)
        setloading(false)
    })
}
  return (
    <div className="p-4">
        <Backbtn/>
        <h1 className="text-3xl my-4">Delete Book</h1>
        {loading ? (<Spinner/>):''}
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
            <h3 className="text-2xl">Are you sure you want to delete the book?</h3>
            <button className="p-4 bg-red-600 text-white m-8 w-full rounded-xl" onClick={handleDelete}>
                Yes, Delete it
            </button>
        </div>
    </div>
    
  )
}

export default Delete
