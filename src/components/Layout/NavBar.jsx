import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";

function ButtonComp(props) {
  return (
    <button className="md:text-xl btn md:btn-circle md:btn-wide gap-2 ">
      <IconContext.Provider value={{ size: 20 }}>
        <AiOutlineShoppingCart />
      </IconContext.Provider>

      <span className="sm:block hidden">Click Here</span>
      <span className="bg-orange-900 px-3 py-1 rounded-2xl ">3</span>
    </button>
  );
}

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-orange-900">
        <div className="navbar-start md:pl-8">
          <a className="btn btn-ghost font-bold normal-case text-xl md:text-3xl ">
            ReactMeals
          </a>
        </div>
        <div className="navbar-end md:pr-8">
          <ButtonComp />
        </div>
      </div>

      {/* <img
        src="src\assets\meals.jpg"
        className="absolute -z-20 bg-auto md:bg-fixed md:min-w-full md:bg-cover "
        alt="bg image"
      ></img> */}
    </>
  );
};

export default NavBar;
