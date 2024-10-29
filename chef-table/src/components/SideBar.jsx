import PropType from 'prop-types';

const SideBar = ({recipeQ,handleRemove,preparedRecipe,calculateTotalTimeAndCalories,totalTime,totalCalories}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
            <div className="overflow-x-auto">
                <h2 className='border-b-2 mx-auto font-semibold text-gray-800 text-center text-2xl'>Want To Cook: {recipeQ.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {recipeQ.map((recipe, index) => (
                            <tr key={index} className='hover'>
                                <th>{index + 1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time}</td>
                                <td>{recipe.calories}</td>
                                <td>
                                    <button onClick={() => {handleRemove(recipe.recipe_id)
                                        calculateTotalTimeAndCalories(recipe.preparing_time,recipe.calories)}
                                    } className="btn btn-sm bg-green-400 rounded-full">Preparing</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto mt-5">
                <h2 className='border-b-2 mx-auto font-semibold text-gray-800 text-center text-2xl'>Currently Cooking: {preparedRecipe.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                        {preparedRecipe.map((recipe, index) => (
                            <tr key={index} className='hover'>
                                <th>{index + 1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time}</td>
                                <td>{recipe.calories}</td>
                            </tr>
                        ))}
                            <tr className='border-none'>
                                <th></th>
                                <td></td>
                                <td>Total Time = {totalTime}</td>
                                <td>Total Calories = {totalCalories}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    recipeQ: PropType.array,
    handleRemove: PropType.func,
    preparedRecipe: PropType.array,
    calculateTotalTimeAndCalories: PropType.func,
    totalTime: PropType.number,
    totalCalories: PropType.number
}

export default SideBar;