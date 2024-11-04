import { Link } from "react-router-dom";

const Book = ({book}) => {
    const  {image,bookName,author,tags,category,rating,bookId} = book;
   
    return (
        <Link to = {`/books/${bookId}`}>
                <div className="card bg-base-100 shadow-xl p-6">
            <figure className="py-8 bg-blue-200">
                <img
                src={image}
                alt="book"
                className="rounded-xl h-[166px]" />
            </figure>
            <div className="card-body items-center text-center">
            <div className="flex gap-5">
            <button className="btn btn-xs">{tags[0]}</button>
            <button className="btn btn-xs">{tags[1]}</button>
            </div>
                <h2 className="card-title">{bookName}</h2>
                <p>By : {author}</p>
            </div>
            <div className="border-t-2 border-dashed"></div>
            <div className="flex justify-between">
                <p>Category: {category}</p>
                <p>{rating}</p>
            </div>
        </div>
        </Link>
    );
};

export default Book;