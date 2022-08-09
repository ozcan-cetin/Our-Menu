import React from 'react';

const Menu = ({item}) => {
  const {id, title, category, price, img, desc} = item
  console.log(title);

  return <div className='single col-md-6 d-flex mb-2 gap-2'>
    <div className='img-div'>
      <img className='rounded-1' src={img} alt={title} />
    </div>
    <div>
     <h5 className='d-flex justify-content-between'>{title}<span>{price}</span></h5>
    
    <p>{desc}</p> 
    </div>
    
    </div>;
};

export default Menu;
