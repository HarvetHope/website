import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faSeedling, faDroplet, faTractor, faGraduationCap, faCow, faRoad, faWheatAwn, faLeaf } from "@fortawesome/free-solid-svg-icons";


const ProjectsPage = () => {
  return (
    <main id="main" className="pt-20">
      <section id="region-intro" class="bg-green-50 py-16">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl font-bold text-gray-800 mb-6">Transforming Agriculture in Gulomakeda</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p class="text-gray-700 text-2xl leading-relaxed mb-6">In the heart of Gulomakeda, Tigray, agriculture is not just a means of livelihood; it's a way of life. Yet, our farmers face challenges that threaten this vital lifeline—from water scarcity to outdated farming techniques. Our mission is to empower these resilient communities by introducing sustainable agricultural practices, enhancing productivity, and ensuring food security.</p>
                        <p class="text-gray-700 text-2xl leading-relaxed">This project aims to address the critical needs of the Gulomakeda district and its surrounding areas, focusing on enhancing agricultural productivity, improving water access and management, introducing modern farming equipment, providing farmer education, managing livestock, developing infrastructure, supporting food security initiatives, and ensuring environmental sustainability.</p>
                        <div className="flex space-x-4">
                        <Link to="/donate" className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition cursor-pointer">Donate Now</Link>
                        </div>
                                      
                    </div>
                    <div>
                        <img class="rounded-lg shadow-xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7a0d4c1938-ca9151decc0df3809e38.png" alt="agricultural landscape in Tigray, Ethiopia, showing farmland and mountains in the background, documentary photography style" />
                    </div>
                </div>
            </div>
        </section>
      <section id="project-hero" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Agricultural Development Projects</h2>
          <p className="text-gray-600 max-w-3xl">Empowering farmers and strengthening agricultural communities through sustainable practices and modern technologies.</p>
        </div>
      </section>
      <section id="project-details" className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProjectCard
              icon={faSeedling}
              title="Enhancing Agricultural Productivity"
              description="Increase crop yields through modern farming techniques and high-yield crop varieties."
            />
            <ProjectCard
              icon={faDroplet}
              title="Access to Water"
              description="Improve irrigation systems to ensure year-round crop production capabilities."
            />
            <ProjectCard
              icon={faTractor}
              title="Modern Equipment"
              description="Provide efficient farming equipment to increase productivity and reduce labor costs."
            />
            <ProjectCard
              icon={faGraduationCap}
              title="Training and Education"
              description="Ongoing educational programs on latest agricultural practices and technologies."
            />
            <ProjectCard
              icon={faCow}
              title="Livestock Management"
              description="Improve livestock health and productivity through better breeding and healthcare."
            />
            <ProjectCard
              icon={faRoad}
              title="Infrastructure Development"
              description="Build and maintain roads, storage facilities, and irrigation systems."
            />
            <ProjectCard
              icon={faWheatAwn}
              title="Food Security"
              description="Ensure food security for all community members, especially during crisis periods."
            />
            <ProjectCard
              icon={faLeaf}
              title="Environmental Sustainability"
              description="Promote eco-friendly farming practices to maintain ecological balance."
            />
          </div>
        </div>
      </section>
      <section id="impact-metrics" className="bg-green-50 py-16" hidden>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <ImpactMetric label="Farmers Supported" value="250+" />
            <ImpactMetric label="Hectares Cultivated" value="1,000" />
            <ImpactMetric label="Communities Served" value="15" />
            <ImpactMetric label="Yield Increase" value="85%" />
          </div>
        </div>
      </section>
    </main>
  );
};

const ProjectCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-green-700 mb-4">
      <FontAwesomeIcon icon={icon} size="3x" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ImpactMetric = ({ label, value }) => (
  <div>
    <div className="text-4xl font-bold text-green-700 mb-2">{value}</div>
    <p className="text-gray-600">{label}</p>
  </div>
);

export default ProjectsPage;
