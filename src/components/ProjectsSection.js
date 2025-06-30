// components/ProjectsSection.js
import React from "react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ProjectCard
            title="Equip"
            description="Provide essential farming tools and equipment (plows, Seeds, fertilizer, etc.)"
            image={`${process.env.PUBLIC_URL}/images/equip.jpg`}
          />
          <ProjectCard
            title="Revitalize"
            description="SRebuild vital infrastructure, like irrigation systems and grain mills."
            image={`${process.env.PUBLIC_URL}/images/revitalize.jpg`}
          />
          <ProjectCard
            title="Innovate"
            description="Introduce modern agricultural techniques to increase yields and resilience."
            image={`${process.env.PUBLIC_URL}/images/Innovate.jpg`}
          />
          <ProjectCard
            title="Harmonize"
            description="Collaborate with local communities to priorize their immediate and long-term needs."
            image={`${process.env.PUBLIC_URL}/images/Harmonize.jpg`}
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="h-48 w-full object-cover" src={image} alt={title} />
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="text-green-700 hover:text-green-800 font-medium cursor-pointer">Learn more <i className="fa-solid fa-arrow-right ml-2"></i></span>
      </div>
    </div>
  );
};

export default ProjectsSection;