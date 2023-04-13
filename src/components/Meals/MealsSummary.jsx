import React from "react";
import ButtonComp from "../UI/ButtonComp";

const MealsSummary = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("src/assets/meals.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content hover:bg-slate-300 hover:bg-opacity-10 rounded-xl ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">MEAL IN YOUR OWN VIBE!</h1>
          <p className="mb-5 text-sky-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt, a quibusdam quam obcaecati, odit aliquam quae mollitia atque quos incidunt voluptatibus iusto molestiae voluptate expedita facere rem reiciendis ullam!
          </p>
          <button className="btn text-white bg-button-gray hover:bg-table-orange px-10 text-lg h-auto">
            Discover Meals
            <i className="p-2 text-2xl fa fa-arrow-right  hover:text-black"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealsSummary;
