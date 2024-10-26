import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/header'


function App() {

  return (
    <>
     <Header></Header>
     <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>

     </div>
    </>
  )
}

export default App
