import SingleBook from "../assets/SingleBook"
const card = ({ books }) => {
  return (
    
   <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    
    {books.map((item,index)=>(
        <SingleBook key={item._id} book={item} index={index}/>
    ))}
   </div>
  )
}

export default card
