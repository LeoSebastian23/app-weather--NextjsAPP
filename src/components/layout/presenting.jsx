import React from "react";

const Presenting = () => {
  return (
    <section className="flex flex-col items-center justify-center sm:flex-row text-center py-4 px-4 bg-amber-100 text-gray-800 shadow-md rounded-b-3xl">
    <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <img
          src="weatherIcon.png"
          alt="Weather Icon"
          className="w-16 h-16 md:w-24 md:h-24"
        />
        <h1 className="text-4xl md:text-5xl font-bold">Weather App</h1>
      </div>
      
    </div>
  </section>
  );
};

export default Presenting;
