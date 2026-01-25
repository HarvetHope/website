// pages/ContactUsPage.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;
      const FORMSPREE_URL = process.env.REACT_APP_FORMSPREE_URL || 'https://formspree.io/f/xwvopbeg';

      // Prefer explicit ID (if set), otherwise use FORMSPREE_URL (defaults to your provided endpoint)
      const endpoint = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : FORMSPREE_URL;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: 'New Contact Form Submission - Harvest Hope Tigray'
          })
        });

        if (response.ok) {
          setFormStatus({
            type: 'success',
            message: 'Thank you for your message! We will get back to you soon.'
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Form submission failed');
        }
      } else {
        // Fallback: open user's email client addressed to the desired recipient
        const to = 'almazrx1@yahoo.com';
        const subject = encodeURIComponent('Contact Form Submission - Harvest Hope Tigray');
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        setFormStatus({ type: 'success', message: 'Your email client was opened to send the message to almazrx1@yahoo.com' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try emailing us directly at almazrx1@yahoo.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us - Harvest Hope Tigray | Get in Touch</title>
        <meta 
          name="description" 
          content="Contact Harvest Hope Tigray. Located in Clarksville, MD. Email: EFInc24@gmail.com | Phone: +202-270-5017" 
        />
      </Helmet>

      <main id="main" className="pt-20">
        {/* Hero Section */}
        <section id="contact-hero" className="bg-green-50 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Get in Touch
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We're here to answer any questions you may have about our initiatives and how you can contribute to supporting Tigray's farming communities.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section id="contact-form" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                  
                  {/* Form Status Messages */}
                  {formStatus.message && (
                    <div className={`mb-6 p-4 rounded-lg ${
                      formStatus.type === 'success' 
                        ? 'bg-green-100 text-green-800 border border-green-300' 
                        : 'bg-red-100 text-red-800 border border-red-300'
                    }`}>
                      {formStatus.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-gray-700 mb-2 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 mb-2 font-semibold">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 transition-colors"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 font-semibold ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>

                  <p className="text-gray-500 text-sm mt-4">
                    * Required fields
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  {/* Connect With Us */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Connect With Us
                    </h3>
                    <div className="flex space-x-6">
                      <a 
                        href="https://www.facebook.com/almaz.zewde.33" 
                        className="text-gray-600 hover:text-green-600 text-2xl transition-colors" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a 
                        href="https://www.twitter.com" 
                        className="text-gray-600 hover:text-green-600 text-2xl transition-colors" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a 
                        href="https://www.instagram.com" 
                        className="text-gray-600 hover:text-green-600 text-2xl transition-colors" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a 
                        href="https://www.linkedin.com" 
                        className="text-gray-600 hover:text-green-600 text-2xl transition-colors" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>
                  </div>

                  {/* Office Location */}
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-700 mr-3" />
                      Office Location
                    </h3>
                    <address className="text-gray-600 not-italic">
                      <strong>Harvest Hope Tigray</strong><br />
                      (Empowering the Farmers Inc.)<br />
                      6445 Richardson Farm Lane<br />
                      Clarksville, MD 21029<br />
                      United States
                    </address>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <a 
                        href="mailto:EFInc24@gmail.com"
                        className="text-gray-600 flex items-center hover:text-green-700 transition-colors"
                      >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-green-700" />
                        EFInc24@gmail.com
                      </a>
                      <a 
                        href="tel:+12022705017"
                        className="text-gray-600 flex items-center hover:text-green-700 transition-colors"
                      >
                        <FontAwesomeIcon icon={faPhone} className="mr-3 text-green-700" />
                        +1 (202) 270-5017
                      </a>
                    </div>
                  </div>

                  {/* Tax Status */}
                  <div className="bg-white p-6 rounded-lg border-2 border-green-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      501(c)(3) Tax-Exempt Organization
                    </h3>
                    <p className="text-gray-600 text-sm">
                      <strong>EIN:</strong> 93-2644193<br />
                      All donations are tax-deductible to the extent permitted by law.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Optional for future enhancement */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Visit Us or Send Mail
              </h2>
              <p className="text-gray-600 mb-8">
                While our primary work is in Tigray, Ethiopia, our US office handles all administrative and donor relations. We welcome correspondence and partnership inquiries.
              </p>
              {/* Future: Add Google Maps embed here */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUsPage;
