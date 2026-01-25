// components/HeroSection.js
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const bgUrl = `${process.env.PUBLIC_URL}/images/gulomekada-breadcrumbs.png`;

  return (
    <section
      id="hero"
      className="relative w-full bg-center bg-cover"
      style={{
        backgroundImage: `url(${bgUrl})`,
        height: '300px'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Empowering Farmers in Tigray
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90">
            Rejuvenate and transform agriculture in the Tigray region of Ethiopia
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/donate"
              className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
            >
              Donate Now
            </Link>
            <Link
              to="/projects"
              className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-green-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;