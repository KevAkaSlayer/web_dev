import Header from "./components/Header"
import Hero from "./components/Hero"
import Recipe from "./components/Recipe"
import RecipeCard from "./components/RecipeCard"
import SideBar from "./components/SideBar"


function App() {
  // const [recipeQ, setRecipeQ] = useState([])


  const addRecipeQ = (card) => {
    console.log(card);
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
          <SideBar></SideBar>
        </section>

      </div>

    </>
  )
}

export default App
