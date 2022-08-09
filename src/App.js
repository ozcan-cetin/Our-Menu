import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
// import menu from "./data";

function App() {
  const [menu, setMenu] = useState(items);
  // console.log(menu);

  // useEffect(() => {
  //   setMenu(items)
  // }, [])
  
  return (
    <div className="row">
      {!menu && <h1>Loading...</h1>}
      <div>
        <h1 className="h1 fw-5 text-center mt-5">Our Menu</h1>
        <div className="line"></div>
      </div>
      <Categories menu={menu} setMenu={setMenu}/>
      <div className="row col-10 menu-container mt-3 mb-5 mx-auto">
      {menu?.map((item)=><Menu item={item}/>)}
  </div>;

      </div>
  );
}

export default App;
