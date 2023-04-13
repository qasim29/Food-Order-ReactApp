import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";

function ButtonComp(props) {
    
  return <button className="md:text-xl btn md:btn-circle md:btn-wide gap-2 ">
      <IconContext.Provider value={{
      size: 20
    }}>
        <AiOutlineShoppingCart />
      </IconContext.Provider>

      <span className="sm:block hidden">Click Here</span>
      <span className="bg-orange-900 px-3 py-1 rounded-2xl ">3</span>
    </button>;
}
  
export default ButtonComp;