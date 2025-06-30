// components/Footer.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4">
            <img
              src={`${process.env.PUBLIC_URL}/images/dark.png`}
              alt="Empowering the Farmers Logo"
              className="h-12"
            />
            <div>
              <h3 className="text-xl font-bold mb-4">Tigray Harvest</h3>
              <p className="text-gray-400">Empowering communities through sustainable development.</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link></li>
              <li><Link to="/donate" className="text-gray-400 hover:text-white">Donate</Link></li>
              <li><Link to="/contact-us" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <span className="text-gray-400 hover:text-white text-xl cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} />   </span>
              <span className="text-gray-400 hover:text-white text-xl cursor-pointer">
                <FontAwesomeIcon icon={faTwitter} /> </span>
              <span className="text-gray-400 hover:text-white text-xl cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} /> </span>
              <span className="text-gray-400 hover:text-white text-xl cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} /> </span>
            </div>
          </div>
          <div hidden="true">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="flex flex-col space-y-3">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
              <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Tigray Harvest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;