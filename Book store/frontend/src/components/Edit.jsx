import React, { useState,useEffect } from 'react'
import Spinner from '../assets/Spinner'
import Backbtn from '../assets/Backbtn'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';
const Edit = () => {
    const[title,setTitle]=useState('')
    const[author,setAuthor]=useState('')
    const[publishYear,setPublishYear]=useState('')
    const[loading,setloading]=useState(false)
    const Navigate=useNavigate()
    const {id}=useParams()
    // const[book,setBook]=useState({})

    useEffect(()=>{
        setloading(true)
        axios.get(`http://localhost:5555/books/:${id}`)
        .then(response=>{
            setAuthor(response.data.authors)
            setPublishYear(response.data.publishYear)
            setTitle(response.data.title)
            // setBook(response.data)
            setloading(false)
        })
        .catch(err=>{
            setloading(false)
            console.log(err)
        })
    })
    const handleEditBook=()=>{
        const data={
            author,
            title,
            publishYear,
        }
        setloading(true)
        axios.patch(`http://localhost:5555/books/${id}`,data)
        .then(()=>{
            setloading(false)
            Navigate('/')
        })
        .catch(err=>{
            console.log(err)
            setloading(false)
        })
    }
  return (
    <div className='p-4'>
        <Backbtn/>
        <h1 className="text-3xl my-4"> Update Book </h1>
        {loading ? <Spinner/>:''}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
            <div className="my-4">
                <label  className="text-xl mr-4 text-gray-500">Title</label>
                <input type="text" 
                value={title}
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                className="border-2 border-gray-500 px-4 py-2 w-full" />
            </div>
            <div className="my-4">
                <label  className="text-xl mr-4 text-gray-500">Author</label>
                <input type="text" 
                value={author}
                onChange={(e)=>{
                    setAuthor(e.target.value)
                }}
                className="border-2 border-gray-500 px-4 py-2 w-full" />
            </div>
            <div className="my-4">
                <label  className="text-xl mr-4 text-gray-500">Publish Year</label>
                <input type="text" 
                value={publishYear}
                onChange={(e)=>{
                    setPublishYear(e.target.value)
                }}
                className="border-2 border-gray-500 px-4 py-2 w-full" />
            </div>
            <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>Save</button>
        </div>
      
    </div>
  )
}

export default Edit
