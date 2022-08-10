import React from 'react';
import { useState } from 'react';
import Menu from './Menu';

const Categories = ({menu, setMenu}) => {

const [data, setData] = useState(menu)


const handleClick = (meal) => {
  if(meal === "all"){
    setMenu(data)
  }else{
    setMenu(data.filter((item)=>item.category===meal))
  }
}


return <div className='d-flex justify-content-center mt-5 gap-1 mx-auto mx-3'>  
    <button className='btn btn-outline-warning rounded-1' onClick={(e)=>handleClick(e.target.innerText.toLowerCase())}>All</button>
    <button className='btn btn-outline-warning rounded-1' onClick={(e)=>handleClick(e.target.innerText.toLowerCase())}>Breakfast</button>
    <button className='btn btn-outline-warning rounded-1' onClick={(e)=>handleClick(e.target.innerText.toLowerCase())}>Lunch</button>
    <button className='btn btn-outline-warning rounded-1' onClick={(e)=>handleClick(e.target.innerText.toLowerCase())}>Shakes</button>
  
  </div>;
};

export default Categories;
