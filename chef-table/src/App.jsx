import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Recipe from "./components/Recipe"
import RecipeCard from "./components/RecipeCard"
import SideBar from "./components/SideBar"


function App() {
  const [recipeQ, setRecipeQ] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const addRecipeQ = (card) => {
    const isExist = recipeQ.find((item) => item.recipe_id === card.recipe_id)
    if (!isExist) {
      setRecipeQ([...recipeQ, card])
    }
    else {
      alert("Already Added")
    }
  }

  const handleRemove = (id) => {
    const newRecipeQ = recipeQ.find((recipe) => recipe.recipe_id === id)
    setRecipeQ(recipeQ.filter((recipe) => recipe.recipe_id !== id))
    setPreparedRecipe([...preparedRecipe,newRecipeQ])
  }

  const calculateTotalTimeAndCalories = (time,calories) => {
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)
  }
  return (
    <>
      <div className="w-11/12 mx-auto">
        {/* header */}
        <Header></Header>
        {/* banner */}
        <Hero></Hero>
        <Recipe></Recipe>
        {/* recipe card section */}
        <section className="flex flex-col md:flex-row gap-6 mt-10">
          <RecipeCard addRecipeQ={addRecipeQ}></RecipeCard>
          <SideBar handleRemove={handleRemove} recipeQ={recipeQ} preparedRecipe={preparedRecipe} calculateTotalTimeAndCalories = {calculateTotalTimeAndCalories} totalTime={totalTime} totalCalories={totalCalories}></SideBar>
        </section>

      </div>

    </>
  )
}

export default App
