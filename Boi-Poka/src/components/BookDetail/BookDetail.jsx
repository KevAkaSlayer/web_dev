import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList,addToStoredWishList } from '../../utility/addtoDb';

const BookDetail = () => {
    const {bookId} = useParams();
    const data =useLoaderData();
    const book = data.find(book => book.bookId === parseInt(bookId));

    const handleMarkAsRead = (id) => {
        {/* Add the book to the readList */}
        {addToStoredReadList(id)}
    }
    const handleAddToWishList = (id) => {
        {/* Add the book to the wishList */}
        {addToStoredWishList(id)}
    }
    return (
        <div>
            <h1>Book Detail : {bookId}</h1>
            {
                book && (
                    <div className="card bg-base-100 w-1/2 shadow-xl p-6">
                        <figure className="py-8 bg-blue-200">
                            <img
                            src={book.image}
                            alt="book"
                            className="rounded-xl h-[166px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                        <div className="flex gap-5">
                        <button className="btn btn-xs">{book.tags[0]}</button>
                        <button className="btn btn-xs">{book.tags[1]}</button>
                        </div>
                            <h2 className="card-title">{book.bookName}</h2>
                            <p>By : {book.author}</p>
                        </div>
                        <div className="border-t-2 border-dashed"></div>
                        <div className="flex justify-between">
                            <p>Category: {book.category}</p>
                            <p>{book.rating}</p>
                        </div>
                        <div className='flex justify-center gap-5'>
                        <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-outline">Mark as read</button>
                        <button onClick={()=>handleAddToWishList(bookId)} className="btn btn-outline btn-primary">Add to WishList</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default BookDetail;