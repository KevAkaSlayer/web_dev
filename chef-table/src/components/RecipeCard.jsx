import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";


const RecipeCard = ({addRecipeQ}) => {
    const [cards,setCards] = useState([])

    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])

    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    cards.map((card)=>(<div key={card.recipe_id} className="card bg-base-100 border-2">
                        <figure className="rounded-lg p-8 background-cover" >
                          <img className="lg:h-96 w-full object-cover rounded-xl" 
                            src={card.recipe_image}
                            alt="" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{card.recipe_name}</h2>
                          <p>{card.short_description}</p>

                          <h2 className="card-title">Ingredients: {card.ingredients.length}</h2>
                          <ul className="ml-5">
                            {
                                card.ingredients.map((ingredient,index)=>(<li className="list-disc text-gray-600" key={index}>{ingredient}</li>))
                            }
                          </ul>
                          <div className="flex gap-1 items-center text-xl font-semibold">
                            <img className="w-5 h-5" src="https://i.ibb.co.com/ts5g4X3/icons8-time-50.png" alt="" />
                            <p>{card.preparing_time} minutes</p>
                            <img  className="w-5 h-5" src="https://i.ibb.co.com/qk9Kpbg/icons8-burn-calories-64.png" alt="" />
                            <p>{card.calories} calories</p>
                          </div>
                          <div className="card-actions">
                            <button onClick={()=>addRecipeQ(card)}  className="btn bg-green-400 px-6 rounded-3xl font-bold">Want to Cook</button>
                          </div>
                        </div>
                      </div>))
                }
            </div>
        </div>
    );
};

RecipeCard.propTypes = {
    addRecipeQ: PropTypes.func
}

export default RecipeCard;