import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Backbtn from '../assets/Backbtn'
import Spinner from '../assets/Spinner'


const Show = () => {
    
    const[book,setBook]=useState({})
    const[loading,setloading]=useState(false)
    const {id}=useParams()

    useEffect(()=>{
        setloading(true)
        axios.get(`http://localhost:5555/books/${id}`)
        .then(response=>{
            setBook(response.data)
            setloading(false)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div className='p-4 grid justify-center bg-gray-300'>
        < Backbtn />
        <h1 className="text-3xl my-4">{book.title}</h1>
      {loading ? (<Spinner/>):(
        <div className="flex flex-col border border-sky-400 rounded-xl w-fit p-4 bg-gray-200"
        >
            <div className="my-4">
                
                <span className='flex justify-center '><img src={book.
thumbnailUrl} /></span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500 ">Title</span>
                <span>{book.title}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500 ">Author</span>
                <span>{book.authors}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500 ">isbn</span>
                <span>{book.
isbn}</span>
            </div>
            {/* <div className="my-4">
                <span className="text-xl mr-4 text-gray-500 ">Short Description</span>
                <a href={book.link}><span >{book.shortDescription}</span></a>
                
            </div> */}
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500 "> Long Description</span>
                <a href={book.link}><span >{book.longDescription}</span></a>
                
            </div>
            
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500 ">status</span>
                <span>{book.status}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500 ">Published Date</span>
                <span>{book.publishedDate}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500 ">Category</span>
                <span>{book.categories}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500 ">Pages</span>
                <span>{book.
pageCount}</span>
            </div>
            
    
        {/* <div className="my-4">
                <span className="text-xl mr-4 text-gray-500 ">Create Time</span>
                <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500 ">Update Time</span>
                <span>{new Date(book.updatedAt).toString()}</span>
            </div> */}
        </div>
      )}
    </div>
  )
}

export default Show
