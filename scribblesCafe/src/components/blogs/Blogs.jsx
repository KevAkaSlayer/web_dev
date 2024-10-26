import { useEffect } from 'react';
import  { useState } from 'react';
import Blog from '../blog/blog';
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmarks ,handleMarksAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className='md:w-2/3'>
            <h1 className='text-4xl'>Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog = {blog} handleAddToBookmarks = {handleAddToBookmarks}
                handleMarksAsRead={handleMarksAsRead}>
                </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func,
    handleMarksAsRead: PropTypes.func
}

export default Blogs;