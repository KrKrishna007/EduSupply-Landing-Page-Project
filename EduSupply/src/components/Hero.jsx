import React from "react";
import bg from "../assets/bg.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 dark:opacity-70"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to EduSupply
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your one-stop shop for school essentials
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
