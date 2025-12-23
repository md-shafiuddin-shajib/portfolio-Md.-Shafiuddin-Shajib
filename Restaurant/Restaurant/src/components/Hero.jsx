import React from "react";
import { assets } from "./../assets/assets";

function Hero() {
  return (
    <div
      id="home"
      className="relative h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${assets.heroImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-65">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-start z-10 relative md:px-16 ">
          <h2 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Experience Fine Dining
          </h2>

          <p className="text-white text-lg mb-8 max-w-lg">
            Indulge in our exquisite culinary creations crafted with passion and
            the finest ingredients.
          </p>

          <a
            href="#resevation"
            className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-red-800-200 transition-colors duration-300 transform hover:scale-105"
          >
            Book a Table
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
