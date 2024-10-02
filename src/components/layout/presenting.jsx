import React from "react";

const Presenting = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-4 px-4 bg-amber-100 text-gray-800 shadow-md rounded-b-3xl">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <img
          src="weatherIcon.png"
          alt="Weather Icon"
          className="w-16 h-16 md:w-24 md:h-24"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ">Weather App</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Consulta el clima en cualquier parte del mundo y mantente informado
          sobre las condiciones meteorológicas de tu ciudad.
        </p>
      </div>
    </section>
  );
};

export default Presenting;
