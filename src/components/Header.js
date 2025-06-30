// components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="header" className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={`${process.env.PUBLIC_URL}/images/Empowering the farmers logo 3-2024.jpg`}
              alt="Empowering the Farmers Logo"
              className="h-12 w-12"
            />
            <h1 className="text-2xl font-bold text-green-700">Harvest Hope Tigray</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-green-700 cursor-pointer">Home</Link>
            <Link to="/projects" className="text-gray-600 hover:text-green-700 cursor-pointer">Projects</Link>
            <Link to="/about-us" className="text-gray-600 hover:text-green-700 cursor-pointer">About Us</Link>
            <Link to="/contact-us" className="text-gray-600 hover:text-green-700 cursor-pointer">Contact</Link>
            <Link to="/donate" className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800">Donate Now</Link>

          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-600">
              <i className="fa-solid fa-bars text-2xl"></i>
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg py-4">
            <Link
              to="/"
              className="block text-gray-600 hover:text-green-700 px-4 py-2"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="block text-gray-600 hover:text-green-700 px-4 py-2"
              onClick={toggleMobileMenu}
            >
              Projects
            </Link>
            <Link
              to="/about-us"
              className="block text-gray-600 hover:text-green-700 px-4 py-2"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="block text-gray-600 hover:text-green-700 px-4 py-2"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link
              to="/donate"
              className="block text-gray-600 hover:text-green-700 px-4 py-2"
              onClick={toggleMobileMenu}
            >
              Donate
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
