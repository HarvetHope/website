// components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="header" className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <img
              src={`${process.env.PUBLIC_URL}/images/Empowering the farmers logo 3-2024.jpg`}
              alt="Harvest Hope Tigray Logo"
              className="h-12 w-12 object-cover rounded-full"
            />
            <h1 className="text-2xl font-bold text-green-700">Harvest Hope Tigray</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-green-700 transition-colors cursor-pointer"
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="text-gray-600 hover:text-green-700 transition-colors cursor-pointer"
            >
              Projects
            </Link>
            <Link 
              to="/media" 
              className="text-gray-600 hover:text-green-700 transition-colors cursor-pointer"
            >
              Impact
            </Link>
            <Link 
              to="/about-us" 
              className="text-gray-600 hover:text-green-700 transition-colors cursor-pointer"
            >
              About Us
            </Link>
            <Link 
              to="/contact-us" 
              className="text-gray-600 hover:text-green-700 transition-colors cursor-pointer"
            >
              Contact
            </Link>
            <Link 
              to="/donate" 
              className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-gray-600 hover:text-green-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <FontAwesomeIcon 
                icon={isMobileMenuOpen ? faTimes : faBars} 
                className="text-2xl" 
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg py-4 animate-fadeIn">
            <Link
              to="/"
              className="block text-gray-600 hover:text-green-700 hover:bg-green-50 px-4 py-3 transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="block text-gray-600 hover:text-green-700 hover:bg-green-50 px-4 py-3 transition-colors"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link
              to="/media"
              className="block text-gray-600 hover:text-green-700 hover:bg-green-50 px-4 py-3 transition-colors"
              onClick={closeMobileMenu}
            >
              Impact
            </Link>
            <Link
              to="/about-us"
              className="block text-gray-600 hover:text-green-700 hover:bg-green-50 px-4 py-3 transition-colors"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="block text-gray-600 hover:text-green-700 hover:bg-green-50 px-4 py-3 transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link
              to="/donate"
              className="block text-gray-600 hover:text-green-700 hover:bg-green-50 px-4 py-3 transition-colors font-semibold"
              onClick={closeMobileMenu}
            >
              Donate Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
