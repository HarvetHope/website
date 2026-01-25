// pages/AboutUsPage.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faDroplet, faTractor, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";

const AboutUsPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Us - Harvest Hope Tigray | Empowering Farmers in Ethiopia</title>
        <meta 
          name="description" 
          content="Learn about Harvest Hope Tigray's mission to restore hope through sustainable agriculture in Tigray, Ethiopia. Founded by Dr. Almaz Desta Zewde in 2023." 
        />
        <meta property="og:title" content="About Harvest Hope Tigray" />
        <meta property="og:description" content="Empowering communities in Tigray through sustainable agriculture and food security programs." />
        <meta property="og:type" content="website" />
      </Helmet>

      <main id="main" className="pt-20">
        {/* Hero Section */}
        <section id="about-hero" className="bg-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About Harvest Hope Tigray
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Harvest Hope Tigray (operating as Empowering the Farmers Inc.) is a 501(c)(3) registered non-profit organization established in 2023 to support the people of Tigray in rebuilding their lives through sustainable agriculture and food security programs.
              </p>
              <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm">
                <p className="text-gray-700">
                  <strong>EIN:</strong> 93-2644193 | <strong>501(c)(3)</strong> Tax-Exempt
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission-vision" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon 
                    icon={faSeedling} 
                    className="text-green-700 text-3xl mt-1" 
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                      To restore hope and rebuild lives in Tigray through sustainable agriculture, focusing on food security, economic empowerment, and community resilience. We work directly with farmers to provide tools, training, and resources needed for self-sufficiency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon 
                    icon={faTractor} 
                    className="text-green-700 text-3xl mt-1" 
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                    <p className="text-gray-600 leading-relaxed">
                      A self-reliant Tigray where communities thrive through sustainable agriculture, ensuring food security and economic prosperity for generations to come. We envision farmers empowered with modern techniques and resources to overcome challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section id="values" className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <FontAwesomeIcon 
                  icon={faSeedling} 
                  size="3x" 
                  className="text-green-600 mb-4" 
                /> 
                <h3 className="text-xl font-bold text-gray-800 mb-3">Compassion</h3>
                <p className="text-gray-600">
                  We act with empathy and understanding, recognizing the dignity of those we serve and approaching every interaction with respect and care.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <FontAwesomeIcon 
                  icon={faDroplet} 
                  size="3x" 
                  className="text-green-600 mb-4" 
                />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of transparency and accountability in all our operations, ensuring donors and communities can trust our work.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <FontAwesomeIcon 
                  icon={faTractor} 
                  size="3x" 
                  className="text-green-600 mb-4" 
                />  
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community-Driven</h3>
                <p className="text-gray-600">
                  We believe in empowering communities to lead their own development journey, working alongside farmers rather than imposing solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section id="approach" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">Sustainable Solutions</h3>
                <p className="text-gray-600">
                  We focus on long-term, sustainable solutions that empower communities to become self-reliant. Our programs are designed to create lasting impact through:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <FontAwesomeIcon 
                      icon={faCheckCircle} 
                      className="text-green-600 mr-3 mt-1 flex-shrink-0" 
                    />
                    <span>Agricultural training and ongoing technical support for modern farming practices</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon 
                      icon={faCheckCircle} 
                      className="text-green-600 mr-3 mt-1 flex-shrink-0" 
                    />
                    <span>Water resource management and irrigation infrastructure development</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon 
                      icon={faCheckCircle} 
                      className="text-green-600 mr-3 mt-1 flex-shrink-0" 
                    />
                    <span>Community engagement and ownership of development initiatives</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">Local Partnership</h3>
                <p className="text-gray-600">
                  We work closely with local communities, organizations, and government entities to ensure our programs are:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <FontAwesomeIcon 
                      icon={faCheckCircle} 
                      className="text-green-600 mr-3 mt-1 flex-shrink-0" 
                    />
                    <span>Culturally appropriate and respectful of local traditions</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon 
                      icon={faCheckCircle} 
                      className="text-green-600 mr-3 mt-1 flex-shrink-0" 
                    />
                    <span>Locally driven by community members who understand their needs</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon 
                      icon={faCheckCircle} 
                      className="text-green-600 mr-3 mt-1 flex-shrink-0" 
                    />
                    <span>Responsive to evolving community needs and priorities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Hero Section */}
        <section id="founder-hero" className="bg-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/AlmazDesta.jpg`} 
                  alt="Dr. Almaz Desta Zewde, Founder and President of Harvest Hope Tigray" 
                  className="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg object-cover"
                />
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Dr. Almaz Desta Zewde
                </h1>
                <p className="text-xl text-gray-600">Founder & President</p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section id="founder-story" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose lg:prose-lg max-w-none">
                <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Early Life & Roots
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Dr. Almaz Desta Zewde's roots are deeply entrenched in the fertile soils of northern Ethiopia, Tigray, in Wereda Gulomekeda, Kushet Kilaat. Growing up surrounded by her family's garden and the local farming community, these early experiences shaped her lifelong commitment to agriculture and sustainable living. Her father, a dedicated farmer, instilled in her the value of producing one's own food, from tomatoes and onions to tropical fruits like oranges, bananas, and mangoes, as well as fresh milk and honey.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Education Journey
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Dr. Zewde's academic path began in Kilaat's elementary school, continued through Agazi High School in Adigrat for grades 7-11, and culminated with her graduation from Atse Yohannes High School in Mekelle. This education established the foundation for her later achievements and eventual return to Ethiopia after studying in the USA.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    The Turning Point
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Her 1993 return visit to Tigray marked a pivotal moment. Witnessing the transformation of her once vibrant, green childhood landscape into a drought-stricken terrain sparked a powerful call to action. This urgency intensified following the devastating conflict in Tigray on November 4, 2020, which resulted in widespread displacement and destruction of farming infrastructure.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Founding Harvest Hope Tigray
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    In September 2023, Dr. Zewde established Empowering the Farmers Inc. (doing business as Harvest Hope Tigray), a US-based 501(c)(3) nonprofit organization (EIN# 93-2644193). The organization focuses on rebuilding and empowering farming communities in Tigray and surrounding regions, providing essential farming tools and support while remaining politically neutral.
                  </p>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <p className="text-gray-700 italic text-lg mb-2">
                      "Thank you for joining us in our mission to revitalize the heartlands of Tigray and beyond."
                    </p>
                    <p className="text-gray-800 font-bold">- Dr. Almaz Desta Zewde</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Support sustainable agriculture and help rebuild communities in Tigray.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#/donate"
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Donate Now
              </a>
              <a
                href="/#/projects"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUsPage;
