import React from "react";

function Hero() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0 text-white md:mr-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Tech Deals Await:
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Find Your Perfect Laptop at Unbeatable Prices!
        </p>
        <button className="absolute bg-gradient-to-br from-pink-400 to-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition duration-300transition duration-100 ease-in-out hover:bg-none hover:border-2 hover:border-card hover:text-gray-500">
          Shop Now
        </button>
      </div>
      <div className="md:w-1/2 relative">
        <img
          className="w-full rounded-lg shadow-lg"
          src="https://i.pinimg.com/originals/1d/90/03/1d9003898f5723081867134deca59a3f.gif"
          alt="Laptop"
        />
      </div>
    </div>
  );
}

export default Hero;
