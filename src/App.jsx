import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx"
import CardForm from "./components/CardForm"
import Example from "./components/Example"

function handleClick(){
  alert ("Ciao");
}

function handleChange(){
  console.log("Ciao");
}

function App() {
  const [count, setCount] = useState(0)
  
  const addCity=(city) =>{
    setCities(prev=>[...prev,city]);
  }

  const [cities,setCities]=useState([
    {
    id: 0,
    name: "Tokyo",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, quisquam tempora aut praesentium nihil facilis iste architecto voluptates culpa sapiente necessitatibus",
    imgURL: "https://images.unsplash.com/photo-1761133135231-2f2fe70907e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
    isVisited:true,

  },
  {
    id: 1,
    name: "New York",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, quisquam tempora aut praesentium nihil facilis iste architecto voluptates culpa sapiente necessitatibus",
    imgURL: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    isVisited:false,
  },
  {
    id: 2,
    name: "Rome",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, quisquam tempora aut praesentium nihil facilis iste architecto voluptates culpa sapiente necessitatibus",
    imgURL: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1996",
    isVisited:false,

  },
  {
    id: 3,
    name: "Paris",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, quisquam tempora aut praesentium nihil facilis iste architecto voluptates culpa sapiente necessitatibus",
    imgURL: "https://plus.unsplash.com/premium_photo-1718035557075-5111d9d906d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    isVisited:true, 
  }
  ]);


  return (
    <>
    <Example></Example>
    <CardForm addCity={addCity}></CardForm>
    <div className='grid grid-cols-4 gap-5'>
      {cities.map((city)=>(
        <Card
          key={city.id}
          title={city.name}
          isVisited={city.isVisited}
          imgURL={city.imgURL}>
          {city.description}
          </Card>
      ))}


      {/*{cities.filter((city) => !city.isVisited).map((city) => (
        <Card
          key={city.id}
          title={city.name}
          isVisited={city.isVisited}
          imgURL={city.imgURL}>
          {city.description}
          </Card>
      ))}
      */}

    </div>
   {/* <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <button onClick={handleClick}>alert</button>
      
      <input type="text" onChange={handleChange}/>


    </div>
    */}
      
    </>
  )
}

export default App
