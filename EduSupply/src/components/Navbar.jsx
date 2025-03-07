import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-gray-800 text-white dark:bg-gray-900 p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="EduSupply Logo" className="h-16 md:h-20" />
        <div className="flex items-center space-x-4">
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          {/* Navigation links */}
          <ul
            className={`md:flex space-x-6 ${
              isOpen ? "block" : "hidden"
            } md:block absolute md:static bg-gray-800 dark:bg-gray-900 w-full md:w-auto top-16 left-0 p-4 md:p-0`}
          >
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-blue-400">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 md:ml-4"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
