import ButtonComp  from '../UI/ButtonComp';
import React from "react";

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
