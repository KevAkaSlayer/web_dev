import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/header'


function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingTime] = useState(0)


  const handleAddToBookmarks = blog => {
    setBookmarks([...bookmarks,blog])
  }

  const handleMarksAsRead  = (id,time) => {
    setReadingTime(readingTime + time)
    // console.log("remove bookmarks",id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
     <Header className='max-w-7xl mx-auto'></Header>
     <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleMarksAsRead={handleMarksAsRead} handleAddToBookmarks = {handleAddToBookmarks}></Blogs>
      <Bookmarks  bookmarks = {bookmarks} readingTime={readingTime}></Bookmarks>

     </div>
    </>
  )
}

export default App
