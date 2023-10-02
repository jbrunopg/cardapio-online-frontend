import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FoodData } from './interface/FoodData';


function App() {
  const { data } = useFoodData();

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData => <Card 
        price={foodData.price} 
        title={foodData.title} 
        image={foodData.image}
        />)}
      </div>
    </div>
  )

export default App
