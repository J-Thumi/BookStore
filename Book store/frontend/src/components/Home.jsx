import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Spinner from '../assets/Spinner'
import { Link } from 'react-router-dom'
import {MdOutlineAddBox} from 'react-icons/md'
import Card from '../home/card'
import Table from '../home/table'

const Home = () => {

    const [books,setBooks]=useState([])
    const [loading,setloading]=useState(false)
const[showType,setShowType]=useState('card')
const [search,setsearch]=useState('')
const[boook,setBoook]=useState()



    useEffect(()=>{
setloading(true)

axios.get('http://localhost:5555/books/')
.then(response=>{
    setBooks(response.data)
    setloading(false)
    console.log(response.data)
})
.catch(err=>{
    console.log(err)
    setloading(false)
})
    },[])

    // useEffect(() => {
    //     setBoook(books);
    
    //     const filteredData = books.filter((item) => item.title.toLowerCase().includes(search));
    
    //     setBoook(filteredData);
    //   }, [books, search]);



  return (
    <div className='p-4 bg-gray-300'>
        {/* <div className="search-crypto">
          <input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setsearch(e.target.value.toLowerCase())}
          />
        </div> */}


        <div className="flex justify-center items-center gap-x-4 ">
            <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=>setShowType('table')}>Table</button>
            <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=>setShowType('card')}>Card</button>

        </div>
        <div className="flex justify-between items-center">
            <h1 className="text-3xl my-8">Books List</h1>
            <Link to='/books/create'>
            <MdOutlineAddBox className='text-sky-800 text-4xl'/>
            </Link>
        </div>
        {loading ? <Spinner/>  : showType==='table' ? <Table books={books}/> : <Card books={books}/>}
      
    </div>
  )
}

export default Home
