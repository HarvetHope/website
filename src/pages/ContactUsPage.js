// ContactUsPage.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import React from "react";

const ContactUsPage = () => {
  return (
    <main id="main" className="pt-20">
      <section id="contact-hero" className="bg-green-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to answer any questions you may have about our initiatives and how you can contribute to supporting Tigray's community.
            </p>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
                  <div className="flex space-x-6">
                    <a href="https://www.facebook.com" className="text-gray-600 hover:text-green-600 text-2xl" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.twitter.com" className="text-gray-600 hover:text-green-600 text-2xl" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com" className="text-gray-600 hover:text-green-600 text-2xl" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com" className="text-gray-600 hover:text-green-600 text-2xl" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Office Location</h3>
                  <p className="text-gray-600">
                  P.O.BOX 5, P.O.BOX 5  
                    <br /> Clarksville, MD 21029
                    <br /> USA
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Info</h3>
                  <p className="text-gray-600 flex items-center mb-2">
                    <i className="fa-solid fa-envelope mr-3"></i>
                    EFInc24@gmail.com
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <i className="fa-solid fa-phone mr-3"></i>
                    +251 123 456 789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;
