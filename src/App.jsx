import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {


  const [BookMarked, setBookMarked] = useState([]);
  const[ readingCount, setReadingCount] = useState(0);

  const handleBookmark = (blog) => {
    setBookMarked([...BookMarked,blog])
  }


  const handleMarkAsRead = (time, id) => {
    const newTime = readingCount + time;
    setReadingCount(newTime);
    handleRemiveFromBookmark(id)
    
  }

 
const handleRemiveFromBookmark = (id) => {

  const remainingBookmark = BookMarked.filter((mark) => mark.id !== id)
  setBookMarked(remainingBookmark);
}



// console.log(BookeMarked)
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex gap-5">
        <div className="left-container w-[70%]">
         
          <Blogs handleBookmark={handleBookmark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%] text-center ">
          <h1 className='font-bold'>Reading Time: {readingCount}</h1>
          <h2>Booked Marked Count: {BookMarked.length}</h2>

          {
           BookMarked.map((marked) => <p key= {marked.id}className='bg-blue-500 p-2 shadow text-white mt-10 rounded-xl'>{marked.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
