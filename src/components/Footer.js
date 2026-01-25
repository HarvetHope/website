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
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/dark.png`}
                alt="Harvest Hope Tigray Logo"
                className="h-12"
              />
              <div>
                <h3 className="text-xl font-bold">Harvest Hope Tigray</h3>
                <p className="text-gray-400 text-sm">Empowering the Farmers Inc.</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              A 501(c)(3) nonprofit organization dedicated to empowering communities in Tigray through sustainable agriculture and food security programs.
            </p>
            <p className="text-gray-400 text-sm mt-3">
              <strong>EIN:</strong> 93-2644193
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-gray-400 hover:text-white transition-colors">
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.facebook.com/almaz.zewde.33" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl cursor-pointer transition-colors"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl cursor-pointer transition-colors"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl cursor-pointer transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl cursor-pointer transition-colors"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="text-gray-400 text-sm space-y-1">
              <p>6445 Richardson Farm Lane</p>
              <p>Clarksville, MD 21029</p>
              <p className="mt-3">
                <a href="mailto:EFInc24@gmail.com" className="hover:text-white transition-colors">
                  EFInc24@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Harvest Hope Tigray (Empowering the Farmers Inc.). All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              501(c)(3) Tax-Exempt Organization | EIN: 93-2644193
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
