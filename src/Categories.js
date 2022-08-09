import React from 'react';
import { useState } from 'react';
import Menu from './Menu';

const Categories = ({menu, setMenu}) => {

const [meal, setMeal] = useState(menu)

console.log(meal);

  const handleAll = () => {
    setMenu(meal)
  }
  const handleBreakfast = () => {
    const breakfast = meal.filter((item)=>item.category==="breakfast")
    setMenu(breakfast)
  }
  const handleLunch = () => {
    setMenu(meal.filter((item)=>item.category==="lunch"))
  }
  const handleShakes = () => {
    setMenu(meal.filter((item)=>item.category==="shakes"))
  }

  return <div className='d-flex justify-content-center mt-5 gap-1 mx-auto mx-3'>  
    <button className='btn btn-outline-warning rounded-1' onClick={handleAll}>All</button>
    <button className='btn btn-outline-warning rounded-1' onClick={handleBreakfast}>Breakfast</button>
    <button className='btn btn-outline-warning rounded-1' onClick={handleLunch}>Lunch</button>
    <button className='btn btn-outline-warning rounded-1' onClick={handleShakes}>Shakes</button>
  
  </div>;
};

export default Categories;
