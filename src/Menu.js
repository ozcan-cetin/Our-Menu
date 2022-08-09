import React from 'react';

const Menu = ({item}) => {
  const {id, title, category, price, img, desc} = item
  console.log(title);

  return <div className='single col-md-10 col-xl-6 col-xs-12 d-md-flex mb-2 gap-2 mx-auto bg-light p-2'>
    <div className='img-div col-md-3 col-xl-4 col-xs-6'>
      <img className='rounded-1' src={img} alt={title} />
    </div>
    <div className='bottom'>
     <h5 className='d-flex justify-content-between align-items-center title text-capitalize'>{title}<span>${price}</span></h5>
    <p className=''>{desc}</p> 
    </div>
    
    </div>;
};

export default Menu;
