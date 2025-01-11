import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {
  const coffees = useLoaderData()


  return (
    <>
    <h1 className='text-6xl text-purple'>Coffee : {coffees.length} </h1>
      <div className='grid grid-cols-3'>
      {
        coffees.map((coffee) => (
          <div key={coffee._id} className='bg-[#f4f3f0] p-24 '>
            <h1 className='text-3xl font-extrabold'>{coffee.name}</h1>
            <p>Quantity: {coffee.quantity}</p>
            <img src={coffee.photo} alt={coffee.name} className='w-1/4' />
          </div>
        ))
      }
      </div>
    </>
  )
}

export default App
