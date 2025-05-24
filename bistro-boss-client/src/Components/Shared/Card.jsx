import React from 'react';

const Card = ({item}) => {
    const { name, recipe, image, price } = item;
    return (
       
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="img" />
                </figure>
                <p className="absolute right-0 mr-4 mt-4 px-4 text-white bg-slate-900">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        
    );
};

export default Card;