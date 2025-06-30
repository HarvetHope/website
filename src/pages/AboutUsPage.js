// AboutUsPage.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faDroplet, faTractor } from "@fortawesome/free-solid-svg-icons";

const AboutUsPage = () => {
  return (
    <main id="main" className="pt-20">
      <section id="about-hero" className="bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About Harvest Hope Tigray</h1>
            <p className="text-lg text-gray-600 mb-8">
              Harvest Hope Tigray is a 501(c)(3) registered non-profit organization established in 2022 to support the people of Tigray in rebuilding their lives through sustainable agriculture and food security programs.
            </p>
          </div>
        </div>
      </section>

      <section id="mission-vision" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              <p className="text-gray-600">
                To restore hope and rebuild lives in Tigray through sustainable agriculture, focusing on food security, economic empowerment, and community resilience.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              <p className="text-gray-600">
                A self-reliant Tigray where communities thrive through sustainable agriculture, ensuring food security and economic prosperity for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <FontAwesomeIcon icon={faSeedling} size="3x" className="text-green-600 mb-4" /> 
              <h3 className="text-xl font-bold text-gray-800 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We act with empathy and understanding, recognizing the dignity of those we serve.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <FontAwesomeIcon icon={faDroplet} size="3x" className="text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of transparency and accountability in all our operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <FontAwesomeIcon icon={faTractor} size="3x" className="text-green-600 mb-4" />  
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community-Driven</h3>
              <p className="text-gray-600">
                We believe in empowering communities to lead their own development journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Sustainable Solutions</h3>
              <p className="text-gray-600">
                We focus on long-term, sustainable solutions that empower communities to become self-reliant. Our programs are designed to create lasting impact through:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Agricultural training and support</li>
                <li className="flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Water resource management</li>
                <li className="flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Community engagement and ownership</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Local Partnership</h3>
              <p className="text-gray-600">
                We work closely with local communities, organizations, and government entities to ensure our programs are:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Culturally appropriate</li>
                <li className="flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Locally driven</li>
                <li className="flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Responsive to community needs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="founder-hero" class="bg-green-50 py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-12">
                    <img src={`${process.env.PUBLIC_URL}/images/AlmazDesta.jpg`} alt="Dr. Almaz Desta Zewde" class="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg" />
                    <h1 class="text-4xl font-bold text-gray-800 mb-4">Dr. Almaz Desta Zewde</h1>
                    <p class="text-xl text-gray-600">Founder & President</p>
                </div>
            </div>
        </div>
    </section>
    <section id="founder-story" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <div class="prose lg:prose-lg">
                    <div class="bg-white rounded-xl shadow-sm p-8 mb-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-6">Early Life & Roots</h2>
                        <p class="text-gray-600 mb-6">Dr. Almaz Desta Zewde's roots are deeply entrenched in the fertile soils of northern Ethiopia, Tigray, in Wereda Glumakeda, Kushet Kilaat. Growing up surrounded by her family's garden and the local farming community, these early experiences shaped her lifelong commitment to agriculture and sustainable living. Her father, a dedicated farmer, instilled in her the value of producing one's own food, from tomatoes and onions to tropical fruits like oranges, bananas, and mangoes, as well as fresh milk and honey.</p>
                    </div>
                    <div class="bg-white rounded-xl shadow-sm p-8 mb-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-6">Education Journey</h2>
                        <p class="text-gray-600 mb-6">Dr. Zewde's academic path began in Kilaat's elementary school, continued through Agazi High School in Adigrat for grades 7-11, and culminated with her graduation from Atse Yohannes High School in Mekelle. This education established the foundation for her later achievements and eventual return to Ethiopia after studying in the USA.</p>
                    </div>
                    <div class="bg-white rounded-xl shadow-sm p-8 mb-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-6">The Turning Point</h2>
                        <p class="text-gray-600 mb-6">Her 1993 return visit to Tigray marked a pivotal moment. Witnessing the transformation of her once vibrant, green childhood landscape into a drought-stricken terrain sparked a powerful call to action. This urgency intensified following the devastating conflict in Tigray on November 4, 2020, which resulted in widespread displacement and destruction of farming infrastructure.</p>
                    </div>
                    <div class="bg-white rounded-xl shadow-sm p-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-6">Founding Empowering the Farmers Inc.</h2>
                        <p class="text-gray-600 mb-6">In September 2023, Dr. Zewde established Empowering the Farmers Inc., a US-based 501(c)(3) nonprofit organization (EIN# 93-2644193). The organization focuses on rebuilding and empowering farming communities in Tigray and surrounding regions, providing essential farming tools and support while remaining politically neutral.</p>
                        <div class="bg-green-50 p-6 rounded-lg">
                            <p class="text-gray-700 italic">"Thank you for joining us in our mission to revitalize the heartlands of Tigray and beyond."</p>
                            <p class="text-gray-800 font-bold mt-2">- Dr. Almaz Desta Zewde</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
  );
};

export default AboutUsPage;
