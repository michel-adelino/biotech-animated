'use client';

import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';

export default function CaseStudies() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    therapeuticArea: '',
    projectDescription: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    const animateCounter = (element: HTMLElement) => {
      const target = parseInt(element.dataset.target || '0');
      const duration = 1500;
      const increment = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          element.textContent = Math.floor(current) + (target >= 500 ? 'M+' : '+');
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target + (target >= 500 ? 'M+' : '+');
        }
      };
      
      updateCounter();
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !(entry.target as HTMLElement).getAttribute('data-animated')) {
          entry.target.setAttribute('data-animated', 'true');
          animateCounter(entry.target as HTMLElement);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.metric-number').forEach(el => counterObserver.observe(el));

    return () => counterObserver.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your company name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter a valid work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.therapeuticArea) {
      newErrors.therapeuticArea = 'Please select a therapeutic area';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        therapeuticArea: '',
        projectDescription: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  return (
    <Layout>
      {/* Introduction Section */}
      <section className="py-32 fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-heading leading-tight">
              Our Strategic Playbook. Your Competitive Edge.
            </h1>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                A successful funding round is the result of a powerful strategy. Our case studies break down the strategic architecture behind our clients' successes—how the visual asset was built, where it was deployed, and the market impact it created.
              </p>
              <p>
                Because this playbook is proprietary and core to our clients' competitive advantage, we provide these detailed analyses on a confidential, request-only basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-32 fade-in">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xl text-gray-300 mb-16">
            We've created key visual assets used in:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="bg-dark-highlighted border border-dark-highlighted rounded-xl p-12 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-8xl font-bold text-pink-primary mb-4 metric-number" data-target="500">0</div>
              <div className="text-lg text-gray-300 uppercase tracking-wider">Client Funding Rounds</div>
            </div>
            <div className="bg-dark-highlighted border border-dark-highlighted rounded-xl p-12 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-8xl font-bold text-pink-primary mb-4 metric-number" data-target="30">0</div>
              <div className="text-lg text-gray-300 uppercase tracking-wider">Successful Series A/B/C Rounds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-32 fade-in">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-highlighted border border-dark-highlighted rounded-xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">
              Request Access to Our Strategic Playbook
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We have a library of confidential case studies in the therapeutic areas listed below. To ensure we send you the most relevant examples, please select the field that is closest to your work.
            </p>
            
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name<span className="text-pink-primary ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full bg-dark-main border rounded-lg px-4 py-3 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-primary ${
                      errors.fullName ? 'border-red-500' : 'border-gray-600 focus:border-pink-primary'
                    }`}
                    required
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company<span className="text-pink-primary ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full bg-dark-main border rounded-lg px-4 py-3 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-primary ${
                      errors.company ? 'border-red-500' : 'border-gray-600 focus:border-pink-primary'
                    }`}
                    required
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Work Email<span className="text-pink-primary ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-dark-main border rounded-lg px-4 py-3 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-primary ${
                      errors.email ? 'border-red-500' : 'border-gray-600 focus:border-pink-primary'
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="therapeuticArea" className="block text-sm font-medium text-gray-300 mb-2">
                    Select Your Closest Therapeutic Area<span className="text-pink-primary ml-1">*</span>
                  </label>
                  <select
                    id="therapeuticArea"
                    name="therapeuticArea"
                    value={formData.therapeuticArea}
                    onChange={handleInputChange}
                    className={`w-full bg-dark-main border rounded-lg px-4 py-3 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-primary appearance-none ${
                      errors.therapeuticArea ? 'border-red-500' : 'border-gray-600 focus:border-pink-primary'
                    }`}
                    required
                  >
                    <option value="">Choose an area...</option>
                    <option value="cell-gene">Cell & Gene Therapy</option>
                    <option value="immunology">Immunology</option>
                    <option value="neurology">Neurology</option>
                    <option value="oncology">Oncology</option>
                    <option value="platform">Platform Technology</option>
                    <option value="rare">Rare Diseases</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.therapeuticArea && (
                    <p className="text-red-500 text-sm mt-1">{errors.therapeuticArea}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-300 mb-2">
                    A brief, confidential description of your project (optional)
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-dark-main border border-gray-600 rounded-lg px-4 py-3 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-primary focus:border-pink-primary resize-vertical"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pink-primary hover:bg-pink-primary/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Me Relevant Case Studies'}
              </button>

              {showSuccess && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg text-center">
                  Thank you! We've received your request and will be in touch shortly.
                </div>
              )}

              <p className="text-sm text-gray-400 text-center mt-6 leading-relaxed">
                By submitting, you agree to keep all provided materials strictly confidential. Our team will be in touch shortly.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
