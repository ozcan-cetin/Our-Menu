import React from 'react';

const Menu = ({item}) => {
  const {id, title, category, price, img, desc} = item
  console.log(title);

  return <div className='single row col-md-10 col-xl-6 mb-2 d-md-flex mx-auto bg-light'>
    <div className='img-div col-md-5 col-xs-10'>
      <img className='rounded-1' src={img} alt={title} />
    </div>
    <div className='bottom col-md-7 col-xs-10'>
     <h5 className='d-flex justify-content-between align-items-center title text-capitalize'>{title}<span>${price}</span></h5>
    <p className=''>{desc}</p> 
    </div>
    
    </div>;
};

export default Menu;
