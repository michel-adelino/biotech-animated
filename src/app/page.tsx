'use client';

import { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import AnimatedButton from '../components/Button';
import FloatingLogs from '../components/FloatingLogs';
import VideoModal from '../components/VideoModal';
import PhaseSlider from '../components/PhaseSlider';
import { Check, LockKeyhole, ShieldCheck, Trash2 } from 'lucide-react';
import TeamIcon from '@/components/TeamIcon';

// Testimonials data - Top 5 testimonials with existing logos
const testimonials = [
  {
    id: 1,
    logo: "/images/logos/Dimerix.webp",
    company: "Dimerix",
    brief: "Receptor-HIT platform visualization for investor presentations",
    quote: "Working with a team that has a deep scientific background is critical. They understood the nuances of our Receptor-HIT platform immediately. The process was efficient, the scientific accuracy was impeccable, and it saved our internal team a significant amount of time.",
    author: "Dr. Nina Webster",
    title: "CEO, Dimerix"
  },
  {
    id: 2,
    logo: "/images/logos/SAb Bio.webp",
    company: "SAb Biotherapeutics",
    brief: "Antibody production platform animation for Series A funding",
    quote: "The animation was a game-changer for our investor presentations. For the first time, we could show our entire antibody production platform in under 2 minutes... and gave investors incredible confidence in our technology.",
    author: "Eddie Sullivan",
    title: "Co-Founder, President & CEO, SAb Biotherapeutics"
  },
  {
    id: 3,
    logo: "/images/logos/Patrys.webp",
    company: "Patrys",
    brief: "Partnership discussions and pharma collaboration visualization",
    quote: "The final animation was not only scientifically precise but also visually stunning. It became a cornerstone of our partnership discussions and was met with overwhelmingly positive feedback from potential pharma partners.",
    author: "Dr. James Campbell",
    title: "CEO and Managing Director, Patrys"
  },
  {
    id: 4,
    logo: "/images/logos/Chimera Bio.webp",
    company: "Chimera Bio",
    brief: "Scientific communication and investor relations",
    quote: "The team understands science and biotech, so communication is direct and effective — no wasting time bringing designers up to speed.",
    author: "Dr. James Campbell",
    title: "CEO, Chimera Bio"
  },
  {
    id: 5,
    logo: "/images/logos/Bio-Techne.webp",
    company: "Bio-Techne",
    brief: "Complex technology communication for investors and partners",
    quote: "Their scientific accuracy and attention to detail helped us communicate our complex technology effectively to investors and partners.",
    author: "Dr. Sarah Chen",
    title: "CTO, Bio-Techne"
  }
];

// Team data for slider
const teamMembers = [
  {
    id: 1,
    name: "Ksenia Timonina, PhD",
    title: "Scientific Managing Director",
    image: "/images/team/Ksenia.jpg",
    description: "Your main point of contact. Ensures scientific accuracy across all project phases, keeping timelines on track and stakeholder communication seamless. Reviews every frame for scientific precision. Five peer-reviewed papers. Also has Level 9 Piano certification, which explains why your project runs like a perfectly orchestrated symphony.",
    credentials: "PhD Molecular Biology, York University",
    expertise: "Project Management, Team Leadership, Scientific Review",
    location: "Canada (Eastern Time)"
  },
  {
    id: 2,
    name: "Isabel Canto, PhD",
    title: "Scientific Story Architect",
    image: "/images/team/isabel.jpg",
    description: "Writes your script. Creates your storyboard. Takes your 200-slide deck and turns it into a 3-minute story that gets funded. Eight publications. Over 100 projects since 2015. Quiet in meetings but comes back with visual solutions so clever you'll wonder if she's psychic.",
    credentials: "PhD Biomedical Sciences, UC San Diego",
    expertise: "Scientific Storytelling, Scriptwriting, Storyboarding",
    location: "United States (Pacific Time)"
  },
  {
    id: 3,
    name: "Andrew Catalano, PhD",
    title: "Scientific Visualization Specialist",
    image: "/images/team/Andrew.jpg",
    description: "Builds your molecular models. Makes sure every protein folds correctly. Published crystal structures at 4.1 Å resolution. When not perfecting your MOA, he's teaching university students why their proteins are drawn wrong.",
    credentials: "PhD Cell and Systems Biology, University of Toronto",
    expertise: "3D Modeling, Structural Biology, Scientific Accuracy",
    location: "Canada (Eastern Time)"
  },
  {
    id: 4,
    name: "Ushma Patel, MS",
    title: "Scientific Art Specialist",
    image: "/images/team/ushma.jpg",
    description: "Creates your Style Frames. Defines your visual brand. 2024 AMI Award winner. Claims her best ideas come from video games and walks, which sounds suspicious until you see the results.",
    credentials: "MS Biomedical Visualization, University of Illinois Chicago; BS Neuroscience, Dominican University",
    expertise: "Art Direction, Style Frame Development, Visual Branding",
    location: "United States (Mountain Time)"
  },
  {
    id: 5,
    name: "Benjamin Denton",
    title: "Founder & CEO",
    image: "/images/team/benjamin.jpg",
    description: "Founded Biomol Visual after working in pharmaceutical business development, managing drug discovery partnerships. Built and retained an exceptional team of PhD and MSc specialists. Driven by the belief that entrepreneurship fuels scientific progress. He helps biotech founders turn innovations into funded realities. Still gets nightmares about Comic Sans in investor presentations.",
    credentials: "BSc Biotechnology, University College London",
    expertise: "Team Leadership, Business Strategy, Lean Operations",
    location: "United States (Pacific Time)"
  }
];

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleShowReel = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Single testimonial slider navigation functions with horizontal movement
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Team slider navigation functions
  const nextTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev < 4 ? prev + 1 : 0)); // 5 team members (0-4)
  };

  const prevTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev > 0 ? prev - 1 : 4));
  };

  const goToTeamSlide = (index: number) => {
    setCurrentTeamSlide(index);
  };


  return (
    <Layout>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/3.webp"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/3.mp4" type="video/mp4" />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-gray-900/70 to-purple-900/80 z-10"></div>

        {/* Bottom gradient overlay for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-[calc(100%-10rem)] bg-gradient-to-t from-gray-900 to-transparent z-15"></div>

        {/* Main Content */}
        <div className="relative z-20 mx-auto px-4 pb-5 flex-1 flex items-end">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-h1 font-display text-gray-200 mb-6 leading-tight">
              Molecular & Cellular MOA Visualization That Gets You Funded
            </h1>
            <p className="text-body-lg text-gray-300 mb-5 max-w-4xl leading-relaxed font-text">
              We translate your complex molecular science into a 3-minute visual story designed to win investor confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <AnimatedButton
                text="Show Reel"
                variant="outline"
                className="h-min w-max bg-white/10 border-none text-white hover:bg-white/20 pr-12 pl-12"
                onClick={handleShowReel}
              />
              <div className="flex flex-col">
                <AnimatedButton
                  text="Book Your Strategy Call →"
                  hoverText="30-minute call. 2 mins to book"
                  variant="primary"
                  className="mb-2 w-72"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by Companies - Integrated into Hero */}
        <div className="relative z-20 bg-gray-900/95">
          <div className="max-w-6xl mx-auto px-4 pb-4">
            <div className="mb-4">
              <h2 className="text-h4 font-display text-gray-200 mb-2">Companies we've worked with include</h2>
            </div>
            <div className="relative overflow-hidden">
              <FloatingLogs />
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-h2 font-display text-gray-200 mb-8">
                We Don't Animate Surgeries. We Visualize Molecular & Cellular Mechanisms of Action.
              </h2>

              <div className="space-y-6 text-body-lg text-gray-300 leading-relaxed font-text">
                <p>Generalist studios animate hip replacements on Monday. A dental procedure on Tuesday. And a new surgical tool on Wednesday. Then they attempt your complex molecular science on Thursday.</p>

                <p>We only do one thing: Visually explain the molecular and cellular science that gets you funded. This singular focus is our advantage.</p>

                <p>Our PhD scientists understand your molecular and cellular Mechanism of Action (MOA) in one call. No wasted time explaining the basics. This deep focus also means fewer errors from the start, which leads to vastly minimized corrections from your board.</p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end h-full">
              <div className="w-full max-w-md lg:max-w-lg">
                <div className="relative h-full overflow-hidden border border-white/20 rounded-lg">
                  <img
                    src="/images/Serimmune_Bead.webp"
                    alt="Serimmune Bead Molecular Visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='py-6'>
            <div className="bg-orange-500/20 rounded-xl border-l-4 border-purple-500 px-4 py-4">
              <p className="italic text-body-lg font-text">"The team understands science and biotech, so communication is direct and effective — no wasting time bringing designers up to speed."</p>
              <p className="mt-2 font-medium font-text">— Dr. James Campbell, CEO, Patrys</p>
            </div>

          </div>
          <p className="font-medium font-display text-center text-h3 text-gray-200">Just a smarter process. And a more powerful result.</p>
        </div>
      </section>

      {/* Showreel Section */}
      <section className="py-20 bg-gray-850">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-display text-gray-200 mb-6">2024 Showreel</h2>
          <p className="text-body-lg text-gray-300 mb-12 max-w-3xl mx-auto font-text">
            Press play to see how we transform complex science into clear, compelling stories that drive results.
          </p>

          {/* Modern Video Container */}
          <div className="relative group">
            {/* Video Container with Modern Styling */}
            <div className="relative w-full aspect-video bg-gradient-to-br from-gray-850 via-gray-900 to-purple-500/30 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-orange-500/20 animate-pulse"></div>

              {/* Video Element - No Native Controls */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover relative z-10 transition-transform duration-700"
                poster="/images/4.webp"
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/videos/4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play/Pause Button Overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300 hover:bg-white focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? (
                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Custom Fullscreen Button - Bottom Right */}
              <div className="absolute bottom-4 right-4 z-30">
                <button
                  className="w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  onClick={toggleFullscreen}
                >
                  {isFullscreen ? (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gray-850 relative overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Chimera.webp)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        ></div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-display text-white mb-6">By the Numbers</h2>
          </div>

          {/* First row - 4 metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-8">
            {/* 300+ Successful projects completed */}
            <div className="bg-gray-900/70 backdrop-blur-sm hover:bg-orange-500/30 transition-all duration-300 px-4 text-center border-l border-gray-400 border-opacity-60 flex flex-col items-start justify-center">
              <div className="text-4xl md:text-5xl font-display text-gray-200 mb-6 mt-8">
                <span className="text-gray-200">$500</span><span className="text-orange-500">M+</span>
              </div>
              <div className="text-body text-gray-300 text-left pb-4 font-text">Raised by Our Clients</div>
            </div>

            {/* 10+ Years of experience */}
            <div className="bg-gray-900/70 backdrop-blur-sm hover:bg-orange-500/30 transition-all duration-300 px-4 text-center border-l border-gray-400 border-opacity-60 flex flex-col items-start justify-center">
              <div className="text-4xl md:text-5xl font-display text-gray-200 mb-6 mt-8">
                <span className="text-gray-200">30</span><span className="text-orange-500">+</span>
              </div>
              <div className="text-body text-gray-300 text-left pb-4 font-text">Successful Rounds of Funding</div>
            </div>

            {/* 99% Customer satisfaction */}
            <div className="bg-gray-900/70 backdrop-blur-sm hover:bg-orange-500/30 transition-all duration-300 px-4 text-center border-l border-gray-400 border-opacity-60 flex flex-col items-start justify-center">
              <div className="text-4xl md:text-5xl font-display text-gray-200 mb-6 mt-8">
                <span className="text-gray-200">70</span><span className="text-orange-500">+</span>
              </div>
              <div className="text-body text-gray-300 text-left pb-4 font-text">Biopharma Clients Served</div>
            </div>

          </div>

          {/* Second row - 2 metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

            {/* 25M Client revenue growth */}
            <div className="bg-gray-900/70 backdrop-blur-sm hover:bg-orange-500/30 transition-all duration-300 px-4 text-center border-l border-gray-400 border-opacity-60 flex flex-col items-start justify-center">
              <div className="text-4xl md:text-5xl font-display text-gray-200 mb-6 mt-8">
                <span className="text-gray-200">100</span><span className="text-orange-500">+</span>
              </div>
              <div className="text-body text-gray-300 text-left pb-4 font-text">Molecular & Cellular Mechanisms Visualized</div>
            </div>


            {/* Additional metric 2 */}
            <div className="bg-gray-900/70 backdrop-blur-sm hover:bg-orange-500/30 transition-all duration-300 px-4 text-center border-l border-gray-400 border-opacity-60 flex flex-col items-start justify-center">
              <div className="text-4xl md:text-5xl font-display text-gray-200 mb-6 mt-8">
                <span className="text-gray-200">1</span>&nbsp;<span className="text-orange-500">in</span>&nbsp;<span className="text-gray-200">4</span>
              </div>
              <div className="text-body text-gray-300 text-left pb-4 font-text">Clients Return for Additional Projects</div>
            </div>

            {/* Additional metric 1 */}
            <div className="bg-gray-900/70 backdrop-blur-sm hover:bg-orange-500/30 transition-all duration-300 px-4 text-center border-l border-gray-400 border-opacity-60 flex flex-col items-start justify-center">
              <div className="text-4xl md:text-5xl font-display text-gray-200 mb-6 mt-8">
                <span className="text-gray-200">10</span><span className="text-orange-500">+</span>
              </div>
              <div className="text-body text-gray-300 text-left pb-4 font-text">Years of Operation</div>
            </div>
          </div>


          <p className="text-center text-body-lg text-gray-300 italic mt-12 font-medium font-text">The track record your breakthrough deserves.</p>
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-950/20"></div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-display text-gray-200 mb-6">What Our Clients Say</h2>
          </div>

          {/* Single Testimonial Slider */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-gray-850/90 hover:bg-purple-500/20 border border-purple-500/30 hover:border-orange-500/50 rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-300 hover:text-orange-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-gray-850/90 hover:bg-purple-500/20 border border-purple-500/30 hover:border-orange-500/50 rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-300 hover:text-orange-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Horizontal Testimonial Slider */}
            <div className="mx-16 overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-850/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-500/20 hover:border-orange-500/30 transition-all duration-500 h-[500px] flex flex-col">
                      <div className="flex flex-col md:flex-row gap-8 flex-1">
                        {/* Left Side - Company Info & Quote */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            {/* Company Logo and Info */}
                            <div className="flex items-center mb-6">
                              <div className="backdrop-blur-sm rounded-lg flex items-center justify-center max-w-[140px] h-[39px] md:h-[52.83px] flex-shrink-0 mr-4">
                                <img 
                                  src={testimonial.logo} 
                                  alt={`${testimonial.company} logo`}
                                  className="h-[32px] md:h-[40px] w-auto max-w-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                  }}
                                />
                              </div>
                            </div>
                            
                            <blockquote className="text-2xl md:text-3xl font-bold text-gray-200 leading-tight">
                              "{testimonial.brief}"
                            </blockquote>
                          </div>
                        </div>

                        {/* Right Side - Author Info & CTA */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            {/* Quotation Mark Icon */}
                            <div className="flex justify-end flex-col gap-2 mb-6">
                              <svg className="w-16 h-16 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                              </svg>
                              <p className="text-body text-gray-300 text-left font-text">{testimonial.quote}</p>
                            </div>
                          </div>

                          {/* Author Info */}
                          <div className="border-t border-gray-600 pt-6">
                            <div className="text-gray-200 font-semibold text-lg">
                              {testimonial.author}
                            </div>
                            <div className="text-gray-400 text-sm mt-1">
                              {testimonial.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentSlide
                    ? 'bg-orange-500 shadow-lg shadow-orange-500/50'
                    : 'bg-gray-600 hover:bg-purple-500/50'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-850">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-display text-gray-200 mb-6">Your Scientific Leadership Team</h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto font-text">
              Meet the dedicated senior experts who will guide your project from scientific discovery to final delivery.
            </p>
          </div>

          {/* Team Slider */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevTeamSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-gray-850/90 hover:bg-purple-500/20 border border-purple-500/30 hover:border-orange-500/50 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 backdrop-blur-sm"
              aria-label="Previous team member"
            >
              <svg className="w-6 h-6 text-gray-300 hover:text-orange-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTeamSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-gray-850/90 hover:bg-purple-500/20 border border-purple-500/30 hover:border-orange-500/50 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 backdrop-blur-sm"
              aria-label="Next team member"
            >
              <svg className="w-6 h-6 text-gray-300 hover:text-orange-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Team Slider Container */}
            <div className="mx-16 overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTeamSlide * 100}%)` }}
              >
                {teamMembers.map((member, index) => (
                  <div key={member.id} className="w-full flex-shrink-0">
                    <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/20 hover:border-orange-500/30 transition-all duration-500 flex flex-col p-4">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
                        {/* Column 1 - Photo */}
                        <div className="flex flex-col">
                          <div className="w-full h-80 rounded-xl overflow-hidden">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover transition-transform duration-300"
                            />
                          </div>
                        </div>

                        {/* Column 2 - Team Bio */}
                        <div className="flex flex-col justify-between">
                          <div>
                            <h4 className="text-h3 font-display text-purple-500 mb-4">{member.name}<br />{member.title}</h4>
                            <p className="text-gray-300 leading-relaxed font-text">
                              {member.description}
                            </p>
                          </div>
                        </div>

                        {/* Column 3 - Team Credentials */}
                        <div className="flex flex-col">
                          <div className="space-y-1 text-small font-text">
                            <div className="text-gray-500">
                              <p className="font-semibold text-purple-500 mb-2">Credentials:</p>
                              <p className="text-gray-300">{member.credentials}</p>
                            </div>
                            <div className="text-gray-500">
                              <p className="font-semibold text-purple-500 mb-2">Expertise:</p>
                              <p className="text-gray-300">{member.expertise}</p>
                            </div>
                            <div className="text-gray-500">
                              <p className="font-semibold text-purple-500 mb-2">Based in:</p>
                              <p className="text-gray-300">{member.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTeamSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentTeamSlide
                    ? 'bg-orange-500 scale-125 shadow-lg shadow-orange-500/50'
                    : 'bg-gray-600 hover:bg-purple-500/50 hover:scale-110'
                    }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Responsive Layout */}
      {/* Desktop - Phase Slider */}
      <PhaseSlider />

      {/* Mobile - Simple Vertical Column */}
      <section className="md:hidden pt-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-display text-gray-200 mb-6">A Simple 5-Phase System</h2>
          </div>

          <div className="flex flex-col space-y-8">
            {/* Phase 1 */}
            <div className="w-full h-[480px] flex-shrink-0 flex flex-col p-8 border border-white/10 hover:border-t-orange-500 hover:border-t-8 transition-all duration-300">
              <div className="flex items-center justify-start mb-8">
                <span className="text-1xl md:text-h3 font-display text-white/50">PHASE 1</span>
                <div className="w-4 h-4 bg-orange-500 ml-4"></div>
              </div>
              <div className="flex-1 gap-4 flex flex-col justify-end h-full">
                <h3 className="text-h3 font-display text-gray-200 mb-6">Strategy & Storyboard</h3>
                <div className="text-body-lg text-gray-500 leading-7 font-text min-h-[200px]">
                  We start with a deep dive into your science, developing a script and visual storyboard. You approve the complete strategic and narrative plan before anything is built.
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="w-full h-[480px] flex-shrink-0 flex flex-col p-8 border border-white/10 hover:border-t-orange-500 hover:border-t-8 transition-all duration-300">
              <div className="flex items-center justify-start mb-8">
                <span className="text-1xl md:text-h3 font-display text-white/50">PHASE 2</span>
                <div className="w-4 h-4 bg-orange-500 ml-4"></div>
              </div>
              <div className="flex-1 gap-4 flex flex-col justify-end h-full">
                <h3 className="text-h3 font-display text-gray-200 mb-6">Design & Animatic</h3>
                <div className="text-body-lg text-gray-500 leading-7 font-text min-h-[200px]">
                  Next, we define the visual universe for your project. You approve the final look and feel with Style Frames and the precise timing with an Animatic, ensuring perfect alignment before production begins.
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="w-full h-[480px] flex-shrink-0 flex flex-col p-8 border border-white/10 hover:border-t-orange-500 hover:border-t-8 transition-all duration-300">
              <div className="flex items-center justify-start mb-8">
                <span className="text-1xl md:text-h3 font-display text-white/50">PHASE 3</span>
                <div className="w-4 h-4 bg-orange-500 ml-4"></div>
              </div>
              <div className="flex-1 gap-4 flex flex-col justify-end h-full">
                <h3 className="text-h3 font-display text-gray-200 mb-6">Production &<br /> Post-Production</h3>
                <div className="text-body-lg text-gray-500 leading-7 font-text min-h-[200px]">
                  With the blueprint approved, our dedicated team of scientific experts brings the vision to life through 3D modeling, animation, and cinematic post-production.
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="w-full h-[480px] flex-shrink-0 flex flex-col p-8 border border-white/10 hover:border-t-orange-500 hover:border-t-8 transition-all duration-300">
              <div className="flex items-center justify-start mb-8">
                <span className="text-1xl md:text-h3 font-display text-white/50">PHASE 4</span>
                <div className="w-4 h-4 bg-orange-500 ml-4"></div>
              </div>
              <div className="flex-1 gap-4 flex flex-col justify-end h-full">
                <h3 className="text-h3 font-display text-gray-200 mb-6">Final Delivery</h3>
                <div className="text-body-lg text-gray-500 leading-7 font-text min-h-[200px]">
                  You receive the final, high-resolution visualization, ready for your investor meeting, conference presentation, or website launch.
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="w-full h-[480px] flex-shrink-0 flex flex-col p-8 border border-white/10 hover:border-t-orange-500 hover:border-t-8 transition-all duration-300">
              <div className="flex items-center justify-start mb-8">
                <span className="text-1xl md:text-h3 font-display text-white/50">PHASE 5</span>
                <div className="w-4 h-4 bg-orange-500 ml-4"></div>
              </div>
              <div className="flex-1 gap-4 flex flex-col justify-end h-full">
                <h3 className="text-h3 font-display text-gray-200 mb-6">Strategic Deployment</h3>
                <div className="text-body-lg text-gray-500 leading-7 font-text min-h-[200px]">
                  Finally, we activate your new asset. The same scientific experts who built your visualization work directly with your team to guide its strategic deployment, maximizing its value long after delivery.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16">
        <div className="text-center text-body-lg text-gray-300 italic font-text">
          A process designed for total clarity,<br className='md:hidden block' /> giving you a transparent, <br className='md:hidden block' />real-time view of your project's progress.
        </div>
        <div className='w-48 mt-2 h-1 bg-orange-500 mx-auto'></div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-850">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-display text-gray-200 mb-6">Your Science Stays Your Science</h2>
            <p className="text-body-lg text-gray-300 max-w-4xl mx-auto font-text">
              We get it. You're about to share your breakthrough with strangers. The mechanism you've spent years perfecting. The data that isn't published yet. Here's our commitment to protecting it:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-850 rounded-xl p-6 text-center hover:bg-purple-500/10 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <ShieldCheck size={48} />
              </div>
              <h4 className="text-body-lg font-display text-gray-200 mb-3">Ironclad NDAs</h4>
              <p className="text-gray-300 text-small font-text">
                We are happy to execute a mutual Non-Disclosure Agreement to protect your confidential information from day one.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-850 rounded-xl p-6 text-center hover:bg-purple-500/10 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <LockKeyhole size={48}/>
              </div>
              <h4 className="text-body-lg font-display text-gray-200 mb-3">Military-Grade Encryption</h4>
              <p className="text-gray-300 text-small font-text">
                Your files are protected at every stage using 256-bit AES encryption.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-850 rounded-xl p-6 text-center hover:bg-purple-500/10 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
               <TeamIcon  size={48}/>
              </div>
              <h4 className="text-body-lg font-display text-gray-200 mb-3">Secure Team Access</h4>
              <p className="text-gray-300 text-small font-text">
                All confidential information is restricted to our scientific leadership team, based exclusively in the US and Canada.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-850 rounded-xl p-6 text-center hover:bg-purple-500/10 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Trash2  size={48}/>
              </div>
              <h4 className="text-body-lg font-display text-gray-200 mb-3">Data Destruction on Request</h4>
              <p className="text-gray-300 text-small font-text">
                We provide complete data destruction upon project completion.
              </p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-body-lg text-gray-300 font-text">
              We've protected the confidential information of over 70 biotech clients. Including some of the most innovative and sensitive biotherapeutic research in the industry. Not one breach. Not one leak. Not one sleepless night for our clients.
            </p>
            <p className="text-h3 font-display text-purple-500">
              Your secret stays secret. Until you're ready to change the world.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Positioning Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-display text-gray-200 mb-8">Why Pay for a Mega-Agency's Overhead?</h2>

          <div className="space-y-6 text-body-lg text-gray-300 font-text leading-relaxed">
            <p>
              The largest Scientific Communication Studios are built on a model of massive scale. You benefit from <span className="text-orange-500 font-display">radically lean operations</span> by design. We have obsessively engineered our entire process to be ruthlessly efficient—from software to business structure. This means zero overhead bloat. Your investment goes directly to the senior talent working on your project.
            </p>

            <p>It's simple. You get a funding-grade result, without paying for mega-agency overhead.</p>

            <p className="text-h3 font-display trackin-[1px] mt-8 text-purple-500">
              A level of value the larger studios simply can't touch.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-850 to-purple-500/20 relative overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Boold_Cells.webp)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        ></div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-850/20 to-purple-500/30"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-h1 font-display text-gray-200 mb-8">Stop Explaining. Start Showing.</h2>

          <p className="text-body-lg text-gray-300 mb-8 font-text">
            Every day without a powerful fundraising asset, the cost of a complex story grows.
          </p>

          <ul className="text-body-lg text-gray-300 font-text space-y-4 mb-12 text-left max-w-2xl mx-auto list-disc">
            <li className="flex items-start">
              <span className="text-orange-500 mr-3"><Check /></span>
              Investors struggle to grasp your science.
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3"><Check /></span>
              Potential partners miss your key competitive advantage.
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3"><Check /></span>
              Your momentum is lost in a loop of re-explaining the core science.
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3"><Check /></span>
              Competitors with clearer stories win the funding that should be yours.
            </li>
          </ul>

          <p className="text-h3 font-display text-purple-500 mb-8">
            One powerful fundraising asset solves all of this.
          </p>

          <div className="flex flex-col items-center">
            <AnimatedButton
              text="Book Your Strategy Call →"
              hoverText="Let's Talk!"
              variant="primary"
              size="lg"
              className="mb-4 w-72"
            />
            <p className="text-small text-gray-500 mb-8 font-text">30-minute call. No obligation. Takes 2 minutes to book.</p>
          </div>

          <p className="text-body-lg text-gray-300 font-text">
            In a 30-minute call, we will show you exactly how to transform your science into your most powerful communication asset.
          </p>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseModal}
        videoSrc="/videos/reel.mp4"
        title="2024 Showreel"
      />

    </Layout>
  );
}
