// components/HeroSection.js
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-24 h-[800px]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Sow Seeds of Hope: Rebuild Tigray Together</h1>
            <p className="text-xl text-gray-600 mb-8">Join us in empowering communities through sustainable agriculture and development initiatives.</p>
            <div className="flex space-x-4">
              <Link to="/donate" className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition cursor-pointer">Donate Now</Link>
              <span className="border border-green-700 text-green-700 px-8 py-3 rounded-lg hover:bg-green-50 transition cursor-pointer" onClick={() => window.location.href = '/projects'}>Learn More</span>
              
            </div>
          </div>
          <div className="md:w-1/2">
            <img className="rounded-xl shadow-2xl" src="/images/Sawseed.jpg" alt="Ethiopian farmers working in green agricultural fields" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;