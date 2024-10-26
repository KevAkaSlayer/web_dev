import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';



const Blog = ({blog,handleAddToBookmarks,handleMarksAsRead}) => {
    const {title,id, author, img,posted_date,readingTime,hashtags,cover} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-5'>
                    <img className='w-14' src={img} alt="" />
                    <div className='flex flex-col'>
                        <h3 className='text-2xl'>{author}</h3>
                        <span>{posted_date}</span>
                    </div>
                </div>
                <div>
                    <span >{readingTime} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark /></button>
                </div>
            </div>
            
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map(hashtag => <span key={hashtag} className='mx-3'><a href="#">#{hashtag}</a></span>)
                }
            </p>
            <button 
            onClick={() => handleMarksAsRead(id,readingTime)}
            className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarksAsRead: PropTypes.func
}

export default Blog;