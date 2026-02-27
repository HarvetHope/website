// pages/MediaPage.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faImage } from "@fortawesome/free-solid-svg-icons";

const MediaPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample images - you have 50+ images to choose from
  const projectImages = [
    { src: "PHOTO-2024-03-26-07-55-26.jpg", caption: "Community Meeting - March 2024" },
    { src: "PHOTO-2024-03-26-07-55-26_1.jpg", caption: "Village Assessment - March 2024" },
    { src: "PHOTO-2024-03-26-07-55-26_2.jpg", caption: "Farmer Interview - March 2024" },
    { src: "PHOTO-2024-03-26-07-55-26_3.jpg", caption: "Agricultural Discussion - March 2024" },
    { src: "PHOTO-2024-03-26-07-55-26_4.jpg", caption: "Community Engagement - March 2024" },
    { src: "PHOTO-2024-03-26-07-55-26_5.jpg", caption: "Field Assessment - March 2024" },
    { src: "PHOTO-2024-03-26-07-55-26_6.jpg", caption: "Village Visit - March 2024" },
    { src: "PHOTO-2024-03-26-07-55-26_7.jpg", caption: "Farmers Gathering - March 2024" },
    { src: "PHOTO-2024-03-26-07-55-51.jpg", caption: "Agricultural Landscape - March 2024" },
    { src: "PHOTO-2024-03-26-07-55-51_1.jpg", caption: "Community Field - March 2024" },
    { src: "PHOTO-2024-03-26-07-55-51_2.jpg", caption: "Farmland Overview - March 2024" },
    { src: "PHOTO-2024-03-26-07-55-52.jpg", caption: "Rural Landscape - March 2024" },
  ];

  return (
    <main id="main" className="pt-20">
      {/* Hero Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Impact in Action
            </h1>
            <p className="text-xl text-gray-600">
              Documenting our journey through Gulomekeda villages, hearing directly from farmers about their challenges and hopes for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                <FontAwesomeIcon icon={faPlay} className="text-green-700 mr-3" />
                Village Assessment Videos
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Watch our field assessments where we visit villages throughout Gulomekeda, speaking directly with farmers about the agricultural challenges they face and their needs for sustainable development.
              </p>
            </div>

            {/* Video Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "WhatsApp Video 2026-02-25 at 1.33.04 PM.mp4",
                "WhatsApp Video 2026-02-25 at 1.33.13 PM.mp4",
                "WhatsApp Video 2026-02-25 at 1.33.20 PM.mp4",
                "WhatsApp Video 2026-02-25 at 1.33.31 PM.mp4",
              ].map((filename, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-xl bg-black">
                  <video
                    controls
                    className="w-full"
                    preload="metadata"
                  >
                    <source src={`${process.env.PUBLIC_URL}/videos/${encodeURIComponent(filename)}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>

            {/* Video Description */}
            <div className="mt-8 bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">About This Assessment</h3>
              <p className="text-gray-700 mb-4">
                Our team traveled through multiple villages in Gulomekeda district, conducting interviews with local farmers to understand their specific challenges. This grassroots approach ensures our programs are directly responsive to community needs.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-700 mb-1">Multiple</div>
                  <div className="text-gray-600">Villages Visited</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-700 mb-1">Direct</div>
                  <div className="text-gray-600">Farmer Interviews</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-700 mb-1">Feb 2026</div>
                  <div className="text-gray-600">Assessment Date</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <FontAwesomeIcon icon={faImage} className="text-green-700 mr-3" />
              Photo Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visual documentation of our field assessments, community meetings, and the agricultural landscapes of Gulomekeda.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/${image.src}`}
                  alt={image.caption}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 text-sm px-3 py-1 bg-green-700 rounded-full">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              This is a selection from our collection. More photos available from March 2024 village assessments.
            </p>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-green-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={`${process.env.PUBLIC_URL}/images/${selectedImage.src}`}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-white p-4 mt-4 rounded-lg">
              <p className="text-gray-800 font-semibold">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your contribution directly supports the farmers and communities you see in these images and videos.
          </p>
          <a
            href="/#/donate"
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Donate Now
          </a>
        </div>
      </section>
    </main>
  );
};

export default MediaPage;
