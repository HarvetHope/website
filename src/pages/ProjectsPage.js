// pages/ProjectsPage.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { 
  faSeedling, 
  faDroplet, 
  faTractor, 
  faGraduationCap, 
  faCow, 
  faRoad, 
  faWheatAwn, 
  faLeaf,
  faPlay 
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";

const ProjectsPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Projects - Harvest Hope Tigray | Agricultural Development in Ethiopia</title>
        <meta 
          name="description" 
          content="Discover our agricultural development projects in Gulomekeda, Tigray. From water access to modern equipment, we're empowering farmers for sustainable growth." 
        />
        <meta property="og:title" content="Agricultural Projects in Tigray" />
        <meta property="og:description" content="Supporting farmers through 8 comprehensive development programs in Gulomekeda district." />
      </Helmet>

      <main id="main" className="pt-20">
        {/* Region Introduction */}
        <section id="region-intro" className="bg-green-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              Transforming Agriculture in Gulomekeda
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                  In the heart of Gulomekeda, Tigray, agriculture is not just a means of livelihood; it's a way of life. Yet, our farmers face challenges that threaten this vital lifeline—from water scarcity to outdated farming techniques. Our mission is to empower these resilient communities by introducing sustainable agricultural practices, enhancing productivity, and ensuring food security.
                </p>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                  This project aims to address the critical needs of the Gulomekeda district and its surrounding areas, focusing on enhancing agricultural productivity, improving water access and management, introducing modern farming equipment, providing farmer education, managing livestock, developing infrastructure, supporting food security initiatives, and ensuring environmental sustainability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/donate" 
                    className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition cursor-pointer"
                  >
                    Donate Now
                  </Link>
                  <Link 
                    to="/media" 
                    className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg hover:bg-green-50 transition cursor-pointer flex items-center"
                  >
                    <FontAwesomeIcon icon={faPlay} className="mr-2" />
                    Watch Village Visits
                  </Link>
                </div>
              </div>
              <div>
                <img 
                  className="rounded-lg shadow-xl w-full h-auto" 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7a0d4c1938-ca9151decc0df3809e38.png" 
                  alt="Agricultural landscape in Tigray, Ethiopia, showing farmland and mountains" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Hero */}
        <section id="project-hero" className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Agricultural Development Programs
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Empowering farmers and strengthening agricultural communities through sustainable practices and modern technologies. Each program is designed based on direct feedback from village assessments.
            </p>
          </div>
        </section>

        {/* Project Details Grid */}
        <section id="project-details" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProjectCard
                icon={faSeedling}
                title="Enhancing Agricultural Productivity"
                description="Increase crop yields through modern farming techniques and high-yield crop varieties tailored to local conditions."
              />
              <ProjectCard
                icon={faDroplet}
                title="Access to Water"
                description="Improve irrigation systems and water management to ensure year-round crop production capabilities."
              />
              <ProjectCard
                icon={faTractor}
                title="Modern Equipment"
                description="Provide efficient farming equipment to increase productivity and reduce labor costs for smallholder farmers."
              />
              <ProjectCard
                icon={faGraduationCap}
                title="Training and Education"
                description="Ongoing educational programs on the latest agricultural practices, technologies, and sustainable methods."
              />
              <ProjectCard
                icon={faCow}
                title="Livestock Management"
                description="Improve livestock health and productivity through better breeding practices and veterinary healthcare."
              />
              <ProjectCard
                icon={faRoad}
                title="Infrastructure Development"
                description="Build and maintain roads, storage facilities, and irrigation systems essential for agricultural success."
              />
              <ProjectCard
                icon={faWheatAwn}
                title="Food Security"
                description="Ensure food security for all community members, especially during crisis periods and seasonal shortages."
              />
              <ProjectCard
                icon={faLeaf}
                title="Environmental Sustainability"
                description="Promote eco-friendly farming practices to maintain ecological balance and protect natural resources."
              />
            </div>
          </div>
        </section>

        {/* Community Engagement Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Listening to Farmers' Voices
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our programs are developed based on direct conversations with farmers across Gulomekeda villages. We conduct regular field assessments to understand the specific challenges each community faces, ensuring our interventions are truly responsive to local needs.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faPlay} className="text-green-700 text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Watch Our Village Assessment
                </h3>
                <p className="text-gray-600 mb-6">
                  See our team visiting villages throughout Gulomekeda, speaking directly with farmers about their challenges and aspirations.
                </p>
                <Link
                  to="/media"
                  className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors"
                >
                  View Assessment Video
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Potential Section - Updated from hidden metrics */}
        <section id="impact-goals" className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Goals for Gulomekeda
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Working together with local communities, we aim to create sustainable, measurable impact across the region.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <ImpactGoal 
                label="Farmers to Support" 
                value="500+" 
                description="Smallholder families"
              />
              <ImpactGoal 
                label="Hectares Target" 
                value="2,000" 
                description="Under cultivation"
              />
              <ImpactGoal 
                label="Villages" 
                value="20+" 
                description="Across Gulomekeda"
              />
              <ImpactGoal 
                label="Sustainability" 
                value="100%" 
                description="Long-term focus"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-green-700 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Make a Difference Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your support directly helps farmers in Gulomekeda access the tools, training, and resources they need to thrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/donate"
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Support Our Projects
              </Link>
              <Link
                to="/contact-us"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// Project Card Component
const ProjectCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <div className="text-green-700 mb-4">
      <FontAwesomeIcon icon={icon} size="3x" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Impact Goal Component (updated from ImpactMetric)
const ImpactGoal = ({ label, value, description }) => (
  <div className="bg-green-50 p-6 rounded-lg">
    <div className="text-4xl font-bold text-green-700 mb-2">{value}</div>
    <p className="text-gray-800 font-semibold mb-1">{label}</p>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default ProjectsPage;
