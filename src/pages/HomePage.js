import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import EmpowerFarmers from "../components/EmpowerFarmers";


const HomePage = () => {
  return (
    <main>
      {/* Other sections of the homepage can go here */}
      <HeroSection />
      <ProjectsSection />
      <EmpowerFarmers />
    </main>
  );
};

export default HomePage;