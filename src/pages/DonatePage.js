// components/DonatePage.js
import React from "react";
import { Link } from "react-router-dom";

const DonatePage = () => {
  return (
    <main className="pt-20">
      <section id="hero" className="h-[600px] relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/images/gulomekada-breadcrumbs.png`}
          alt="African community farming together in agricultural field, natural lighting, hopeful atmosphere"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-6 h-full flex items-center relative">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Support Tigray's Recovery</h1>
            <p className="text-xl mb-8">
              Join us in empowering communities through sustainable agriculture and development initiatives.
            </p>
            <Link to="/projects" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section id="donation-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Make Your Contribution</h2>
          <div style={{ position: "relative", overflow: "hidden", height: "1200px", width: "100%" }}>
            <iframe
              title="Donation form powered by Zeffy"
              style={{ position: "absolute", border: 0, top: 0, left: 0, bottom: 0, right: 0, width: "100%", height: "100%" }}
              src="https://www.zeffy.com/donation-form/donate-to-farmers-of-tigray"
              allowpaymentrequest
              allowTransparency="true"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonatePage;
