import React from "react";

const MealsSummary = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("src/assets/meals.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content rounded md:bg-base-100">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">TAKE YOUR FUTURE IN YOUR OWN HANDS!</h1>
          <p className="mb-5 text-sky-100">
            Discover a course through the Times Course Finder and find the
            destination that fulfils your needs without the hassle of explaining
            what you want. With 60+ popular study destinations to choose from.
          </p>
          <button className="btn bg-[#2B1D69] hover:bg-[#F9F7FD] hover:text-black px-10 text-lg h-auto text-white">
            Discover Universities
            <i className="p-2 text-2xl fa fa-arrow-right  hover:text-black"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealsSummary;
