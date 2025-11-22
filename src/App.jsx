import { useState,useEffect, useReducer } from 'react'
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

function formReducer(state,action){
  switch(action.type){
    case "CHANGE_FIELD":
      return {...state,[action.field]:action.value}
      case "RESET_FORM":
        return {name: '',email: ''};
        default:
          return state;
  }

}

function App() {
  const [count, setCount] = useState(0)
  const [formState,dispatchFormState]=useReducer(formReducer,{name: '',email: ''})
  
  const addCity=(city) =>{
    setCities(prev=>[...prev,city]);
  }
  
  const[data,setData]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json()).then((data)=>{
      setData(data);
      console.log(data)});
    },[]);


  //GESTIONE DELLA MODIFICA DEL CAMPO
  const handleFieldChange=(field,value)=>{
    dispatchFormState({type: "CHANGE_FIELD",field,value})
  };

  //GESTIONE DEL RESET DEL FORM
  const resetForm=()=>{
    dispatchFormState({type:"RESET_FORM"})
  };



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

      </div>
      <div className='grid grid-cols-4 gap-5'>
        {data.map((item)=>(
          <div key={item.id} className='bg-slate-400 rounded-lg p-3'>
            <p className='text-red-500 mb-1'>userId: {item.userId}</p>
            <h2 className='text-xl mb-3'> {item.title}</h2>
            <p className='text-grey-900'>{item.body}</p>
        </div>

      ))}
      </div>



   {/* <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <button onClick={handleClick}>alert</button>
      
      <input type="text" onChange={handleChange}/>


    </div>
    */}
    <form>
      <div>
        <label htmlFor='name'>Nome: </label>
        <input 
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={(e)=>handleFieldChange("name",e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={(e)=>handleFieldChange("email",e.target.value)}
        />
      </div>
      <button onClick={resetForm}>Reset</button>
      <button>Invia</button>
    </form>
      
    </>
  );
}

export default App;
