import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="shadow-md sticky top-0 z-50 backdrop-blur-3xl">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="flex justify-between items-center py-8">
          {/* logo */}
          <div className="flex  items-center font-bold">
            <img
              src="./src/assets/logo2.png"
              alt="logo"
              className="w-12 h-12"
            />
            <h1 className="bg-gradient-to-r from-gray-400 via-gray-300 to-red-700 text-transparent bg-clip-text text-2xl md:text-3xl">
              Restaurant
            </h1>
          </div>
          {/* NavLink hidden in small device */}
          <nav className="hidden md:flex items-center space-x-6 text-dark">
            <a className="font-semibold hover:text-primary" href="#home">
              Home
            </a>
            <a className="font-semibold hover:text-primary" href="#about">
              About
            </a>
            <a className="font-semibold hover:text-primary" href="#menu">
              Menu
            </a>
            <a className="font-semibold hover:text-primary" href="#reservation">
              Reservation
            </a>
            <a className="font-semibold hover:text-primary" href="#contact">
              Contact
            </a>
          </nav>
          {/* Mobile menu button (Visible on mobile screen) */}
          <div className="md:hidden">
            {showMenu ? (
              <FaXmark
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
                className="text-xl cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
                className="text-xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <div>
        {showMenu && (
          <div className="md:hidden flex flex-col items-center space-y-4 h-screen bg-gradient-to-b from-transparent via-pink-200 to-pink-300">
            <a  onClick={() => {
                  setShowMenu(!showMenu);
                }} className="font-semibold hover:text-primary w-full text-center bg-white p-5" href="#home">
              Home
            </a>
            <a  onClick={() => {
                  setShowMenu(!showMenu);
                }} className="font-semibold hover:text-primary bg-white w-full text-center bg-white p-5" href="#about">
              About
            </a>
            <a  onClick={() => {
                  setShowMenu(!showMenu);
                }} className="font-semibold hover:text-primary w-full text-center bg-white p-5" href="#menu">
              Menu
            </a>
            <a  onClick={() => {
                  setShowMenu(!showMenu);
                }} className="font-semibold hover:text-primary w-full text-center bg-white p-5" href="#reservation">
              Reservation
            </a>
            <a  onClick={() => {
                  setShowMenu(!showMenu);
                }} className="font-semibold hover:text-primary w-full text-center bg-white p-5" href="#contact">
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
