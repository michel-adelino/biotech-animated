'use client';

import { useState } from 'react';
import Layout from '../../components/Layout/Layout';

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    interest: '',
    source: '',
    message: ''
  });

  const openForm = () => {
    setIsFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeForm = () => {
    setIsFormOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your inquiry! We\'ll respond within 24 hours.');
    closeForm();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      interest: '',
      source: '',
      message: ''
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-primary via-pink-accent to-coral-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/90 via-pink-accent/80 to-coral-primary/90"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you need a full custom project or something from our asset library, we'll figure out the right fit together.
          </p>
          <div className="text-lg text-white/85 mb-8 space-y-4">
            <p>Our scientific team is ready to discuss your project.</p>
            <p className="italic">Series A pitch. Website homepage. Partnership meetings. Sales presentations. Board decks.</p>
            <p>Wherever you need to explain complex cellular and biomolecular science clearly, we help.</p>
          </div>
          <button 
            onClick={openForm}
            className="bg-coral-primary hover:bg-coral-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-coral-primary/30"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Form Overlay */}
      {isFormOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 transition-opacity duration-300"
          onClick={closeForm}
        ></div>
      )}

      {/* Slide-in Form Panel */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[600px] bg-white z-50 transform transition-transform duration-300 ${
        isFormOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8 h-full overflow-y-auto">
          <button 
            onClick={closeForm}
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
            aria-label="Close form"
          >
            ×
          </button>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Contact Us</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-coral-primary">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-accent focus:border-pink-accent transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-coral-primary">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-accent focus:border-pink-accent transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-coral-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-accent focus:border-pink-accent transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telephone Number
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-accent focus:border-pink-accent transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                I'm interested in <span className="text-coral-primary">*</span>
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-accent focus:border-pink-accent transition-colors"
              >
                <option value="">Select an option</option>
                <option value="custom">Full Custom Project</option>
                <option value="precision">SLAB: Precision Loop</option>
                <option value="signature">SLAB: Signature Loop</option>
                <option value="instant">SLAB: Instant Loop</option>
                <option value="inquiry">General Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How did you hear about us?
              </label>
              <select
                name="source"
                value={formData.source}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-accent focus:border-pink-accent transition-colors"
              >
                <option value="">Select an option</option>
                <option value="referral">Referral</option>
                <option value="search">Search Engine</option>
                <option value="linkedin">LinkedIn</option>
                <option value="conference">Conference/Event</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your project
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-accent focus:border-pink-accent transition-colors resize-vertical"
              />
            </div>
            
            <div className="text-center text-sm text-gray-600">
              <p className="flex items-center justify-center gap-2">
                <span className="text-pink-primary">✓</span>
                Trusted by 70+ biopharma companies
              </p>
            </div>
            
            <button
              type="submit"
              className="w-full bg-coral-primary hover:bg-coral-primary/90 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-coral-primary/30"
            >
              Submit Inquiry
            </button>
            
            <div className="text-center text-xs text-gray-500">
              <p>All inquiries are confidential and your information is secured with 256-bit encryption.</p>
            </div>
          </form>
        </div>
      </div>

      {/* Company Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-pink-accent mb-8 font-heading">About Biomol Visual</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  In October 2025, Biotech Animated became Biomol Visual, marking a decade of specialized work in molecular and cellular mechanism of action visualization. Our rebrand reflects our singular focus: helping biotech companies translate groundbreaking science into funded realities.
                </p>
                <p>
                  Biomol Visual LLP is registered in London, but our entire scientific leadership team—PhD and MSc-qualified molecular biologists and biomedical visualization specialists—operates across US and Canada time zones (Pacific, Mountain, and Eastern). This global structure allows us to work seamlessly with biotech companies worldwide, from Boston and San Diego to London and Sydney.
                </p>
                <p>
                  We've partnered with innovative companies worldwide, supporting funding rounds that have generated over $500 million in capital, including clients later acquired for multi-billion dollar valuations.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-8">
                  <div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Registered Office</div>
                    <div className="text-gray-900 leading-relaxed">
                      Biomol Visual LLP<br />
                      27 Old Gloucester Street<br />
                      London, United Kingdom<br />
                      WC1N 3AX
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Phone</div>
                    <div className="text-gray-900 leading-relaxed">
                      US: <a href="tel:+16196739008" className="text-pink-accent hover:text-pink-primary transition-colors">+1 (619) 673-9008</a><br />
                      UK: <a href="tel:+441603976082" className="text-pink-accent hover:text-pink-primary transition-colors">+44 1603 976 082</a>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Email</div>
                    <div className="text-gray-900">
                      <a href="mailto:info@biomolvisual.com" className="text-pink-accent hover:text-pink-primary transition-colors">
                        info@biomolvisual.com
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Business Hours</div>
                    <div className="text-gray-900 leading-relaxed">
                      Available 9 AM - 6 PM Pacific<br />
                      Every business day
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Client Base Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Global Client Base</h2>
          <p className="text-lg text-gray-600 mb-12">Our clients span the world's leading biotech hubs:</p>
          
          <div className="space-y-6 text-lg">
            <div>
              <span className="font-semibold text-coral-primary">United States:</span>
              <span className="text-gray-700 ml-2">San Diego • Boston • San Francisco • New York • Philadelphia</span>
            </div>
            
            <div>
              <span className="font-semibold text-coral-primary">Australia:</span>
              <span className="text-gray-700 ml-2">Sydney • Melbourne</span>
            </div>
            
            <div>
              <span className="font-semibold text-coral-primary">United Kingdom:</span>
              <span className="text-gray-700 ml-2">London • Cambridge</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mt-12 leading-relaxed">
            From seed stage to late-stage acquisition prep, we've worked with biotech companies across every funding stage.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-main">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-heading">Have Questions?</h2>
          <div className="text-lg text-white/85 mb-8 space-y-4 leading-relaxed">
            <p>Fill out the form and tell us what you're working on.</p>
            <p>Whether you need a full custom project for your funding round or a short clip from our asset bank, we'll help you figure out the right next step.</p>
            <p>We respond within 24 hours.</p>
          </div>
          <button 
            onClick={openForm}
            className="bg-coral-primary hover:bg-coral-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-coral-primary/30"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </Layout>
  );
}
