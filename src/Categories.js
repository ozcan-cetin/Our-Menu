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
    <button className='btn btn-outline-warning rounded-1 text-capitalize' onClick={(e)=>handleClick(e.target.innerText)}>all</button>
    <button className='btn btn-outline-warning rounded-1 text-capitalize' onClick={(e)=>handleClick(e.target.innerText)}>breakfast</button>
    <button className='btn btn-outline-warning rounded-1 text-capitalize' onClick={(e)=>handleClick(e.target.innerText)}>lunch</button>
    <button className='btn btn-outline-warning rounded-1 text-capitalize' onClick={(e)=>handleClick(e.target.innerText)}>shakes</button>
  
  </div>;
};

export default Categories;
