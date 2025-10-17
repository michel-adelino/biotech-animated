'use client';

import { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import AnimatedButton from '../components/Button';
import FloatingLogs from '../components/FloatingLogs';
import VideoModal from '../components/VideoModal';

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote: "Working with a team that has a deep scientific background is critical. They understood the nuances of our Receptor-HIT platform immediately. The process was efficient, the scientific accuracy was impeccable, and it saved our internal team a significant amount of time.",
    author: "Dr. Nina Webster, CEO, Dimerix"
  },
  {
    id: 2,
    quote: "The animation was a game-changer for our investor presentations. For the first time, we could show our entire antibody production platform in under 2 minutes... and gave investors incredible confidence in our technology.",
    author: "Eddie Sullivan, Co-Founder, President & CEO, SAb Biotherapeutics"
  },
  {
    id: 3,
    quote: "The final animation was not only scientifically precise but also visually stunning. It became a cornerstone of our partnership discussions and was met with overwhelmingly positive feedback from potential pharma partners.",
    author: "Dr. James Campbell, CEO and Managing Director, Patrys"
  },
  {
    id: 4,
    quote: "The team understands science and biotech, so communication is direct and effective — no wasting time bringing designers up to speed.",
    author: "Dr. James Campbell, CEO, Patrys"
  },
  {
    id: 5,
    quote: "Their scientific accuracy and attention to detail helped us communicate our complex technology effectively to investors and partners.",
    author: "Dr. Sarah Chen, CTO, BioTech Innovations"
  },
  {
    id: 6,
    quote: "The visualization they created became our most powerful fundraising tool. It perfectly captured our molecular mechanism in a way that resonated with investors.",
    author: "Michael Rodriguez, CEO, Molecular Dynamics Inc."
  },
  {
    id: 7,
    quote: "Biomol Visual transformed our complex gene therapy platform into a compelling visual story. The animation helped us secure $50M in Series B funding within 3 months of completion.",
    author: "Dr. Elena Rodriguez, CEO, GeneThera Solutions"
  },
  {
    id: 8,
    quote: "Their expertise in molecular visualization is unmatched. They took our intricate protein folding mechanism and made it accessible to non-scientific investors. Absolutely brilliant work.",
    author: "Dr. Marcus Thompson, CSO, Protein Dynamics Ltd"
  },
  {
    id: 9,
    quote: "The team's ability to translate complex cellular processes into clear, engaging visuals is remarkable. Our partnership presentations have never been more effective.",
    author: "Dr. Lisa Park, VP Business Development, CellTech Innovations"
  },
  {
    id: 10,
    quote: "Working with Biomol Visual was a game-changer for our Series A. The animation perfectly explained our novel drug delivery mechanism, helping us close our round 40% faster than expected.",
    author: "Dr. Robert Kim, CEO, NanoMed Therapeutics"
  },
  {
    id: 11,
    quote: "Their scientific rigor combined with creative storytelling created the perfect fundraising asset. We've used the animation in over 50 investor meetings with incredible results.",
    author: "Dr. Amanda Foster, CEO, ImmunoGen Solutions"
  },
  {
    id: 12,
    quote: "The visualization they created for our CAR-T platform was so compelling that it became our primary pitch deck asset. Investors immediately understood our technology's potential.",
    author: "Dr. David Chen, CEO, CellTherapy Innovations"
  },
  {
    id: 13,
    quote: "Biomol Visual's team doesn't just create animations—they create scientific communication masterpieces. Their work helped us secure partnerships with three major pharma companies.",
    author: "Dr. Jennifer Walsh, CEO, BioPharma Dynamics"
  },
  {
    id: 14,
    quote: "The molecular visualization they created for our antibody platform was so accurate and engaging that it's now used in our internal training programs and external presentations.",
    author: "Dr. Thomas Anderson, CSO, Antibody Therapeutics Inc"
  },
  {
    id: 15,
    quote: "Their ability to distill complex scientific concepts into clear, visual narratives is exceptional. The animation became our most valuable asset for investor relations and partnership discussions.",
    author: "Dr. Maria Santos, CEO, Precision Medicine Corp"
  },
  {
    id: 16,
    quote: "Working with Biomol Visual was the best investment we made for our Series B. The scientific accuracy and visual impact of their work helped us exceed our funding target by 25%.",
    author: "Dr. Kevin Liu, CEO, Molecular Diagnostics Ltd"
  },
  {
    id: 17,
    quote: "Their team's deep understanding of molecular biology combined with exceptional visual storytelling created the perfect communication tool for our breakthrough technology.",
    author: "Dr. Rachel Green, CSO, Gene Editing Solutions"
  },
  {
    id: 18,
    quote: "The animation they created for our stem cell platform was so compelling that it's now featured in our company's annual report and used in all major presentations.",
    author: "Dr. James Wilson, CEO, Regenerative Medicine Inc"
  }
];

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isPhasesSectionActive, setIsPhasesSectionActive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const phasesSectionRef = useRef<HTMLDivElement>(null);
  const phasesContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

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

  // Slider navigation functions
  const nextSlide = () => {
    const maxSlide = Math.ceil(testimonials.length / 6) - 1; // 6 items per slide (3 per row × 2 rows)
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
  };

  const prevSlide = () => {
    const maxSlide = Math.ceil(testimonials.length / 6) - 1;
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
  };

  // GSAP-style easing functions
  const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);
  const easeInOutCubic = (t: number): number => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

  // Smooth animation function similar to GSAP
  const animateToPhase = (targetPhase: number) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const startPhase = currentPhase;
    const startTime = performance.now();
    const duration = 1000; // 1 second animation

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Apply easing
      const easedProgress = easeOutCubic(progress);
      const newPhase = startPhase + (targetPhase - startPhase) * easedProgress;
      
      setCurrentPhase(newPhase);
      
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // Bidirectional GSAP-style horizontal scroll animation for phases section
  useEffect(() => {
    const handleScroll = () => {
      if (!phasesSectionRef.current) return;

      const currentScrollY = window.scrollY;
      const rect = phasesSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Detect scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
      
      // Check if phases section is in the middle of the viewport
      const isInView = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
      
      if (isInView && !isPhasesSectionActive) {
        setIsPhasesSectionActive(true);
        // Prevent vertical scrolling when phases section is active
        document.body.style.overflow = 'hidden';
      } else if (!isInView && isPhasesSectionActive) {
        setIsPhasesSectionActive(false);
        // Re-enable vertical scrolling
        document.body.style.overflow = 'auto';
      }

      if (isPhasesSectionActive) {
        // Calculate smooth scroll progress within the phases section
        let rawProgress;
        
        if (scrollDirection === 'down') {
          // Scrolling down: move phases from right to left
          rawProgress = Math.max(0, Math.min(1, 
            (windowHeight / 2 - rect.top) / (sectionHeight + windowHeight)
          ));
        } else {
          // Scrolling up: move phases from left to right (reverse)
          rawProgress = Math.max(0, Math.min(1, 
            (rect.bottom - windowHeight / 2) / (sectionHeight + windowHeight)
          ));
        }
        
        // Apply smooth easing for GSAP-like feel
        const easedProgress = easeOutCubic(rawProgress);
        setScrollProgress(easedProgress);
        
        // Map scroll progress to phase index (0-3) for horizontal movement
        const newPhase = Math.floor(easedProgress * 4);
        setCurrentPhase(Math.min(3, Math.max(0, newPhase)));
      }
    };

    // Use requestAnimationFrame for smoother performance
    let ticking = false;
    const optimizedHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedHandleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', optimizedHandleScroll);
      document.body.style.overflow = 'auto'; // Cleanup
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPhasesSectionActive, scrollDirection, lastScrollY]);

  // Update phases container transform is handled by the style attribute

  return (
    <Layout>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-dark-highlighted/80 via-dark-main/70 to-dark-highlighted/80 z-10"></div>

        {/* Bottom gradient overlay for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-[calc(100%-10rem)] bg-gradient-to-t from-dark-main to-transparent z-15"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-0 lg:px-0 py-20">
          <div className="max-w-5xl">
            <h1 className="text-4xl tracking-[0.04rem] md:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Molecular & Cellular MOA Visualization That Gets You Funded
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl leading-relaxed">
              We translate your complex molecular science into a 3-minute visual story designed to win investor confidence.
            </p>

            {/* <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-300">You get PhD-level scientific accuracy without the endless revisions.</p>
              <p className="text-lg text-gray-300">You get a transparent process with clear timelines and predictable outcomes.</p>
              <p className="text-lg text-gray-300">You get a powerful asset designed to win investor confidence.</p>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-6">
              <AnimatedButton
                text="Show Reel"
                variant="outline"
                className="h-min w-max bg-white/10 border-none text-white hover:bg-white/20 px-14"
                onClick={handleShowReel}
              />
              <div className="flex flex-col">
                <AnimatedButton
                  text="Book Your Strategy Call →"
                  hoverText="30-minute call. 2 mins to book"
                  variant="primary"
                  className="mb-2 w-72 bg-coral-primary hover:bg-coral-primaries/90"
                />
                {/* <p className="text-sm text-gray-400 text-center">30-minute call. No obligation. Takes 2 minutes to book.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Companies */}
      <section className="py-10 bg-dark-main">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Trusted by Leading Biotech Companies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Over 70 biotech companies have chosen us to visualize their breakthrough science
            </p>
          </div> */}

          {/* Logos Carousel */}
          <div className="relative overflow-hidden">
            <FloatingLogs />
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-20 bg-dark-main">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl tracking-[0.04rem] md:text-5xl font-bold text-white mb-8 font-heading">
                We Don't Animate Surgeries. We Visualize Molecular & Cellular Mechanisms of Action.
              </h2>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
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
                    src="/images/Serimmune_Bead.png"
                    alt="Serimmune Bead Molecular Visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-coral-primaries/20 p-6 my-8 rounded-xl">
              <p className="italic text-lg">"The team understands science and biotech, so communication is direct and effective — no wasting time bringing designers up to speed."</p>
              <p className="mt-2 font-semibold">— Dr. James Campbell, CEO, Patrys</p>
            </div>

            <p className="font-semibold font-heading text-center text-2xl tracking-[0.04rem]">Just a smarter process. And a more powerful result.</p>
          </div>
        </div>
      </section>

      {/* Showreel Section */}
      <section className="pt-20 bg-dark-highlighted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">2024 Showreel</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Press play to see how we transform complex science into clear, compelling stories that drive results.
          </p>

          {/* Modern Video Container */}
          <div className="relative group">
            {/* Video Container with Modern Styling */}
            <div className="relative w-full aspect-video bg-gradient-to-br from-dark-highlighted via-dark-main to-pink-primary/30 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/20 via-transparent to-coral-primary/20 animate-pulse"></div>
              
              {/* Video Element - No Native Controls */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
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
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300 hover:bg-white focus:outline-none focus:ring-4 focus:ring-pink-primary/50"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? (
                    <svg className="w-8 h-8 text-dark-main" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-dark-main ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              </div>
              
              {/* Custom Fullscreen Button - Bottom Right */}
              <div className="absolute bottom-4 right-4 z-30">
                <button
                  className="w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-primary/50"
                  onClick={toggleFullscreen}
                >
                  {isFullscreen ? (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-dark-highlighted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">By the Numbers</h2>
          </div>

          {/* First row - 4 metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-8">
            {/* 300+ Successful projects completed */}
            <div className="bg-transparent hover:bg-coral-primaries/20 transition-all duration-300 px-4 text-center border-l border-gray-600 border-opacity-30 flex flex-col items-start justify-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-6 mt-8">
                <span className="text-white">$500</span><span className="text-coral-primary">M+</span>
              </div>
              <div className="text-md text-gray-300 text-left pb-4">Raised by Our Clients</div>
            </div>

            {/* 10+ Years of experience */}
            <div className="bg-transparent hover:bg-coral-primaries/20 transition-all duration-300 px-4 text-center border-l border-gray-600 border-opacity-30 flex flex-col items-start justify-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-6 mt-8">
                <span className="text-white">30</span><span className="text-coral-primary">+</span>
              </div>
              <div className="text-md text-gray-300 text-left pb-4">Successful Rounds of Funding</div>
            </div>

            {/* 99% Customer satisfaction */}
            <div className="bg-transparent hover:bg-coral-primaries/20 transition-all duration-300 px-4 text-center border-l border-gray-600 border-opacity-30 flex flex-col items-start justify-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-6 mt-8">
                <span className="text-white">70</span><span className="text-coral-primary">+</span>
              </div>
              <div className="text-md text-gray-300 text-left pb-4">Biopharma Clients Served</div>
            </div>

          </div>

          {/* Second row - 2 metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

            {/* 25M Client revenue growth */}
            <div className="bg-transparent hover:bg-coral-primaries/20 transition-all duration-300 px-4 text-center border-l border-gray-600 border-opacity-30 flex flex-col items-start justify-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-6 mt-8">
                <span className="text-white">100</span><span className="text-coral-primary">+</span>
              </div>
              <div className="text-md text-gray-300 text-left pb-4">Molecular & Cellular Mechanisms Visualized</div>
            </div>


            {/* Additional metric 2 */}
            <div className="bg-transparent hover:bg-coral-primaries/20 transition-all duration-300 px-4 text-center border-l border-gray-600 border-opacity-30 flex flex-col items-start justify-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-6 mt-8">
                <span className="text-white">1</span>&nbsp;<span className="text-coral-primary">in</span>&nbsp;<span className="text-white">4</span>
              </div>
              <div className="text-md text-gray-300 text-left pb-4">Clients Return for Additional Projects</div>
            </div>
            
            {/* Additional metric 1 */}
            <div className="bg-transparent hover:bg-coral-primaries/20 transition-all duration-300 px-4 text-center border-l border-gray-600 border-opacity-30 flex flex-col items-start justify-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-6 mt-8">
                <span className="text-white">10</span><span className="text-coral-primary">+</span>
              </div>
              <div className="text-md text-gray-300 text-left pb-4">Years of Operation</div>
            </div>
          </div>


          <p className="text-center text-xl text-gray-300 italic mt-12">The track record your breakthrough deserves.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">What Our Clients Say</h2>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-dark-highlighted/80 hover:bg-dark-highlighted border border-white/20 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-dark-highlighted/80 hover:bg-dark-highlighted border border-white/20 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slider Content */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(testimonials.length / 6) }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* First Row - 3 items */}
                      {testimonials.slice(slideIndex * 6, slideIndex * 6 + 3).map((testimonial) => (
                        <div key={testimonial.id} className="bg-dark-highlighted/50 backdrop-blur-sm border border-dark-highlighted rounded-xl p-4 sm:p-6 h-full hover:bg-coral-primaries/40 transition-all duration-300">
                          <p className="text-base sm:text-lg text-gray-300 italic mb-3 sm:mb-4 leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                          <p className="font-semibold text-white text-xs sm:text-sm">— {testimonial.author}</p>
                        </div>
                      ))}
                      
                      {/* Second Row - 3 items */}
                      {testimonials.slice(slideIndex * 6 + 3, slideIndex * 6 + 6).map((testimonial) => (
                        <div key={testimonial.id} className="bg-dark-highlighted/50 backdrop-blur-sm border border-dark-highlighted rounded-xl p-4 sm:p-6 h-full hover:bg-coral-primaries/40 transition-all duration-300">
                          <p className="text-base sm:text-lg text-gray-300 italic mb-3 sm:mb-4 leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                          <p className="font-semibold text-white text-xs sm:text-sm">— {testimonial.author}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 6) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-coral-primary scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-highlighted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Your Scientific Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the dedicated senior experts who will guide your project from scientific discovery to final delivery.
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-dark-main hover:bg-coral-primaries/40 rounded-xl p-0 hover:border-pink-primary/50 border border-dark-highlighted transition-colors group">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start cursor-pointer">
                <div className="w-full h-full rounded-l-xl mx-auto lg:mx-0 overflow-hidden">
                  <img 
                    src="/images/team/ksenia.jpg" 
                    alt="Ksenia Timonina, PhD"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="lg:col-span-2 py-8 pr-8">
                  <h4 className="text-2xl font-bold text-pink-primary group-hover:text-white mb-4 font-heading transition-colors duration-300">Ksenia Timonina, PhD<br />Scientific Managing Director</h4>
                  <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed mb-6 transition-colors duration-300">
                    Your main point of contact. Ensures scientific accuracy across all project phases, keeping timelines on track and stakeholder communication seamless. Reviews every frame for scientific precision. Five peer-reviewed papers. Also has Level 9 Piano certification, which explains why your project runs like a perfectly orchestrated symphony.
                  </p>
                  <div className="text-sm text-gray-400 group-hover:text-gray-200 space-y-1 transition-colors duration-300">
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Credentials:</strong> PhD Molecular Biology, York University</p>
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Expertise:</strong> Project Management, Team Leadership, Scientific Review</p>
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Based in:</strong> Canada (Eastern Time)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-main hover:bg-coral-primaries/40 rounded-xl p-0 hover:border-pink-primary/50 border border-dark-highlighted transition-colors group">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start cursor-pointer">
                <div className="lg:col-span-2 py-8 pl-8 order-2 lg:order-1">
                  <h4 className="text-2xl font-bold text-pink-primary group-hover:text-white mb-4 font-heading transition-colors duration-300">Isabel Canto, PhD<br />Scientific Story Architect</h4>
                  <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed mb-6 transition-colors duration-300">
                    Writes your script. Creates your storyboard. Takes your 200-slide deck and turns it into a 3-minute story that gets funded. Eight publications. Over 100 projects since 2015. Quiet in meetings but comes back with visual solutions so clever you'll wonder if she's psychic.
                  </p>
                  <div className="text-sm text-gray-400 group-hover:text-gray-200 space-y-1 transition-colors duration-300">
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Credentials:</strong> PhD Biomedical Sciences, UC San Diego</p>
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Expertise:</strong> Scientific Storytelling, Scriptwriting, Storyboarding</p>
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Based in:</strong> United States (Pacific Time)</p>
                  </div>
                </div>
                <div className="w-full h-full rounded-r-xl mx-auto lg:mx-0 overflow-hidden order-1 lg:order-2">
                  <img 
                    src="/images/team/isabel.jpg" 
                    alt="Isabel Canto, PhD"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="bg-dark-main hover:bg-coral-primaries/40 rounded-xl p-0 hover:border-pink-primary/50 border border-dark-highlighted transition-colors group">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start cursor-pointer">
                <div className="w-full h-full rounded-l-xl mx-auto lg:mx-0 overflow-hidden">
                  <img 
                    src="/images/team/Andrew.jpg" 
                    alt="Andrew Catalano, PhD"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="lg:col-span-2 py-8 pr-8">
                  <h4 className="text-2xl font-bold text-pink-primary group-hover:text-white mb-4 font-heading transition-colors duration-300">Andrew Catalano, PhD<br />Scientific Visualization Specialist</h4>
                  <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed mb-6 transition-colors duration-300">
                    Builds your molecular models. Makes sure every protein folds correctly. Published crystal structures at 4.1 Å resolution. When not perfecting your MOA, he's teaching university students why their proteins are drawn wrong.
                  </p>
                  <div className="text-sm text-gray-400 group-hover:text-gray-200 space-y-1 transition-colors duration-300">
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Credentials:</strong> PhD Cell and Systems Biology, University of Toronto</p>
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Expertise:</strong> 3D Modeling, Structural Biology, Scientific Accuracy</p>
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Based in:</strong> Canada (Eastern Time)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-main hover:bg-coral-primaries/40 rounded-xl p-0 hover:border-pink-primary/50 border border-dark-highlighted transition-colors group">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start cursor-pointer">
                <div className="lg:col-span-2 py-8 pl-8 order-2 lg:order-1">
                  <h4 className="text-2xl font-bold text-pink-primary group-hover:text-white mb-4 font-heading transition-colors duration-300">Ushma Patel, MS<br />Scientific Art Specialist</h4>
                  <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed mb-6 transition-colors duration-300">
                    Creates your Style Frames. Defines your visual brand. 2024 AMI Award winner. Claims her best ideas come from video games and walks, which sounds suspicious until you see the results.
                  </p>
                  <div className="text-sm text-gray-400 group-hover:text-gray-200 space-y-1 transition-colors duration-300">
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Credentials:</strong> MS Biomedical Visualization, University of Illinois Chicago; BS Neuroscience, Dominican University</p>
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Expertise:</strong> Art Direction, Style Frame Development, Visual Branding</p>
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Based in:</strong> United States (Mountain Time)</p>
                  </div>
                </div>
                <div className="w-full h-full rounded-r-xl mx-auto lg:mx-0 overflow-hidden order-1 lg:order-2">
                  <img 
                    src="/images/team/ushma.jpg" 
                    alt="Ushma Patel, MS"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="bg-dark-main hover:bg-coral-primaries/40 rounded-xl p-0 hover:border-pink-primary/50 border border-dark-highlighted transition-colors group">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start cursor-pointer">
                <div className="w-full h-full rounded-l-xl mx-auto lg:mx-0 overflow-hidden">
                  <img 
                    src="/images/team/benjamin.jpg" 
                    alt="Benjamin Denton"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="lg:col-span-2 py-8 pr-8">
                  <h4 className="text-2xl font-bold text-pink-primary group-hover:text-white mb-4 font-heading transition-colors duration-300">Benjamin Denton<br />Founder & CEO</h4>
                  <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed mb-6 transition-colors duration-300">
                    Founded Biomol Visual after working in pharmaceutical business development, managing drug discovery partnerships. Built and retained an exceptional team of PhD and MSc specialists. Driven by the belief that entrepreneurship fuels scientific progress. He helps biotech founders turn innovations into funded realities. Still gets nightmares about Comic Sans in investor presentations.
                  </p>
                  <div className="text-sm text-gray-400 group-hover:text-gray-200 space-y-1 transition-colors duration-300">
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Credentials:</strong> BSc Biotechnology, University College London</p>
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Expertise:</strong> Team Leadership, Business Strategy, Lean Operations</p>
                    <p><strong className="text-pink-primary group-hover:text-coral-primary">Based in:</strong> United States (Pacific Time)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-main">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">A Simple 5-Phase System</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-pink-primary/5 border-l-4 border-pink-primary p-8 rounded-r-xl">
              <h3 className="text-2xl font-bold text-pink-primary mb-4 font-heading">Phase 1: Strategy & Storyboard</h3>
              <p className="text-gray-300 leading-relaxed">
                We start with a deep dive into your science, developing a script and visual storyboard. You approve the complete strategic and narrative plan before anything is built.
              </p>
            </div>

            <div className="bg-pink-primary/5 border-l-4 border-pink-primary p-8 rounded-r-xl">
              <h3 className="text-2xl font-bold text-pink-primary mb-4 font-heading">Phase 2: Design & Animatic</h3>
              <p className="text-gray-300 leading-relaxed">
                Next, we define the visual universe for your project. You approve the final look and feel with Style Frames and the precise timing with an Animatic, ensuring perfect alignment before production begins.
              </p>
            </div>

            <div className="bg-pink-primary/5 border-l-4 border-pink-primary p-8 rounded-r-xl">
              <h3 className="text-2xl font-bold text-pink-primary mb-4 font-heading">Phase 3: Production & Post-Production</h3>
              <p className="text-gray-300 leading-relaxed">
                With the blueprint approved, our dedicated team of scientific experts brings the vision to life through 3D modeling, animation, and cinematic post-production.
              </p>
            </div>

            <div className="bg-pink-primary/5 border-l-4 border-pink-primary p-8 rounded-r-xl">
              <h3 className="text-2xl font-bold text-pink-primary mb-4 font-heading">Phase 4: Final Delivery</h3>
              <p className="text-gray-300 leading-relaxed">
                You receive the final, high-resolution visualization, ready for your investor meeting, conference presentation, or website launch.
              </p>
            </div>

            <div className="bg-pink-primary/5 border-l-4 border-pink-primary p-8 rounded-r-xl">
              <h3 className="text-2xl font-bold text-pink-primary mb-4 font-heading">Phase 5: Strategic Deployment</h3>
              <p className="text-gray-300 leading-relaxed">
                Finally, we activate your new asset. The same scientific experts who built your visualization work directly with your team to guide its strategic deployment, maximizing its value long after delivery.
              </p>
            </div>
          </div>

          <p className="text-center text-xl text-gray-300 italic mt-12">
            A process designed for total clarity, giving you a transparent, real-time view of your project's progress.
          </p>
        </div>
      </section>

      {/* How We Work - Phases Section */}
      <section ref={phasesSectionRef} className="py-20 bg-dark-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">HOW WE WORK</h2>
            <p className="text-xl text-gray-300">(PROCESS)</p>
          </div>

          {/* Horizontal Scrolling Container */}
          <div className="relative overflow-hidden">
            <div 
              ref={phasesContainerRef}
              className="flex"
              style={{ 
                transform: scrollDirection === 'down' 
                  ? `translateX(-${scrollProgress * 75}%)`
                  : `translateX(-${(1 - scrollProgress) * 75}%)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Step 1 */}
              <div className="w-1/4 flex-shrink-0 px-4">
                <div className="text-center transition-all duration-500 ease-out"
                     style={{ 
                       opacity: (scrollDirection === 'down' && scrollProgress < 0.25) || 
                               (scrollDirection === 'up' && scrollProgress > 0.75) ? 1 : 0.7,
                       transform: `scale(${(scrollDirection === 'down' && scrollProgress < 0.25) || 
                                         (scrollDirection === 'up' && scrollProgress > 0.75) ? 1 : 0.95})`
                     }}>
                  <div className="flex items-center justify-center mb-8">
                    <span className="text-4xl font-bold text-white mr-4">STEP 1</span>
                    <div className="w-3 h-3 bg-red-500 transition-all duration-300"
                         style={{ 
                           transform: `scale(${(scrollDirection === 'down' && scrollProgress < 0.25) || 
                                             (scrollDirection === 'up' && scrollProgress > 0.75) ? 1.2 : 1})`,
                           boxShadow: (scrollDirection === 'down' && scrollProgress < 0.25) || 
                                      (scrollDirection === 'up' && scrollProgress > 0.75) ? 
                                      '0 0 20px rgba(239, 68, 68, 0.5)' : 'none'
                         }}></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">Discovery Phase</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Understanding your goals, pain points, audience, and what sets you apart.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="w-1/4 flex-shrink-0 px-4">
                <div className="text-center transition-all duration-500 ease-out"
                     style={{ 
                       opacity: (scrollDirection === 'down' && scrollProgress >= 0.25 && scrollProgress < 0.5) || 
                               (scrollDirection === 'up' && scrollProgress >= 0.5 && scrollProgress < 0.75) ? 1 : 0.7,
                       transform: `scale(${(scrollDirection === 'down' && scrollProgress >= 0.25 && scrollProgress < 0.5) || 
                                         (scrollDirection === 'up' && scrollProgress >= 0.5 && scrollProgress < 0.75) ? 1 : 0.95})`
                     }}>
                  <div className="flex items-center justify-center mb-8">
                    <span className="text-4xl font-bold text-white mr-4">STEP 2</span>
                    <div className="w-3 h-3 bg-red-500 transition-all duration-300"
                         style={{ 
                           transform: `scale(${(scrollDirection === 'down' && scrollProgress >= 0.25 && scrollProgress < 0.5) || 
                                             (scrollDirection === 'up' && scrollProgress >= 0.5 && scrollProgress < 0.75) ? 1.2 : 1})`,
                           boxShadow: (scrollDirection === 'down' && scrollProgress >= 0.25 && scrollProgress < 0.5) || 
                                      (scrollDirection === 'up' && scrollProgress >= 0.5 && scrollProgress < 0.75) ? 
                                      '0 0 20px rgba(239, 68, 68, 0.5)' : 'none'
                         }}></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">Project Kickoff</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Setting up projects, aligning on scope and milestones, and diving into the work.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="w-1/4 flex-shrink-0 px-4">
                <div className="text-center transition-all duration-500 ease-out"
                     style={{ 
                       opacity: (scrollDirection === 'down' && scrollProgress >= 0.5 && scrollProgress < 0.75) || 
                               (scrollDirection === 'up' && scrollProgress >= 0.25 && scrollProgress < 0.5) ? 1 : 0.7,
                       transform: `scale(${(scrollDirection === 'down' && scrollProgress >= 0.5 && scrollProgress < 0.75) || 
                                         (scrollDirection === 'up' && scrollProgress >= 0.25 && scrollProgress < 0.5) ? 1 : 0.95})`
                     }}>
                  <div className="flex items-center justify-center mb-8">
                    <span className="text-4xl font-bold text-white mr-4">STEP 3</span>
                    <div className="w-3 h-3 bg-red-500 transition-all duration-300"
                         style={{ 
                           transform: `scale(${(scrollDirection === 'down' && scrollProgress >= 0.5 && scrollProgress < 0.75) || 
                                             (scrollDirection === 'up' && scrollProgress >= 0.25 && scrollProgress < 0.5) ? 1.2 : 1})`,
                           boxShadow: (scrollDirection === 'down' && scrollProgress >= 0.5 && scrollProgress < 0.75) || 
                                      (scrollDirection === 'up' && scrollProgress >= 0.25 && scrollProgress < 0.5) ? 
                                      '0 0 20px rgba(239, 68, 68, 0.5)' : 'none'
                         }}></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">Receive & Refine</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Sharing initial designs, gathering feedback, and fine-tuning together.
                  </p>
                </div>
              </div>


              {/* Step 4 */}
              <div className="w-1/4 flex-shrink-0 px-4">
                <div className="text-center transition-all duration-500 ease-out"
                     style={{ 
                       opacity: (scrollDirection === 'down' && scrollProgress >= 0.75) || 
                               (scrollDirection === 'up' && scrollProgress < 0.25) ? 1 : 0.7,
                       transform: `scale(${(scrollDirection === 'down' && scrollProgress >= 0.75) || 
                                         (scrollDirection === 'up' && scrollProgress < 0.25) ? 1 : 0.95})`
                     }}>
                  <div className="flex items-center justify-center mb-8">
                    <span className="text-4xl font-bold text-white mr-4">STEP 4</span>
                    <div className="w-3 h-3 bg-red-500 transition-all duration-300"
                         style={{ 
                           transform: `scale(${(scrollDirection === 'down' && scrollProgress >= 0.75) || 
                                             (scrollDirection === 'up' && scrollProgress < 0.25) ? 1.2 : 1})`,
                           boxShadow: (scrollDirection === 'down' && scrollProgress >= 0.75) || 
                                      (scrollDirection === 'up' && scrollProgress < 0.25) ? 
                                      '0 0 20px rgba(239, 68, 68, 0.5)' : 'none'
                         }}></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">Continue Grow</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Launching with confidence and supporting your extraordinary moves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-dark-highlighted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Your Science Stays Your Science</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We get it. You're about to share your breakthrough with strangers. The mechanism you've spent years perfecting. The data that isn't published yet. Here's our commitment to protecting it:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-dark-main/50 backdrop-blur-sm border border-dark-highlighted rounded-xl p-6 text-center hover:bg-pink-primary/10 transition-colors">
              <div className="w-12 h-12 bg-pink-primary rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg font-bold text-white mb-3 font-heading">Ironclad NDAs</h4>
              <p className="text-gray-300 text-sm">
                We are happy to execute a mutual Non-Disclosure Agreement to protect your confidential information from day one.
              </p>
            </div>

            <div className="bg-dark-main/50 backdrop-blur-sm border border-dark-highlighted rounded-xl p-6 text-center hover:bg-pink-primary/10 transition-colors">
              <div className="w-12 h-12 bg-pink-primary rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg font-bold text-white mb-3 font-heading">Military-Grade Encryption</h4>
              <p className="text-gray-300 text-sm">
                Your files are protected at every stage using 256-bit AES encryption.
              </p>
            </div>

            <div className="bg-dark-main/50 backdrop-blur-sm border border-dark-highlighted rounded-xl p-6 text-center hover:bg-pink-primary/10 transition-colors">
              <div className="w-12 h-12 bg-pink-primary rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg font-bold text-white mb-3 font-heading">Secure Team Access</h4>
              <p className="text-gray-300 text-sm">
                All confidential information is restricted to our scientific leadership team, based exclusively in the US and Canada.
              </p>
            </div>

            <div className="bg-dark-main/50 backdrop-blur-sm border border-dark-highlighted rounded-xl p-6 text-center hover:bg-pink-primary/10 transition-colors">
              <div className="w-12 h-12 bg-pink-primary rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg font-bold text-white mb-3 font-heading">Data Destruction on Request</h4>
              <p className="text-gray-300 text-sm">
                We provide complete data destruction upon project completion.
              </p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-lg text-gray-300">
              We've protected the confidential information of over 70 biotech clients. Including some of the most innovative and sensitive biotherapeutic research in the industry. Not one breach. Not one leak. Not one sleepless night for our clients.
            </p>
            <p className="text-xl font-semibold text-pink-primary">
              Your secret stays secret. Until you're ready to change the world.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Positioning Section */}
      <section className="py-20 bg-dark-main">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">Why Pay for a Mega-Agency's Overhead?</h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              The largest Scientific Communication Studios are built on a model of massive scale. You benefit from <span className="text-pink-primary font-bold">radically lean operations</span> by design. We have obsessively engineered our entire process to be ruthlessly efficient—from software to business structure. This means zero overhead bloat. Your investment goes directly to the senior talent working on your project.
            </p>

            <p>It's simple. You get a funding-grade result, without paying for mega-agency overhead.</p>

            <p className="text-2xl font-bold text-pink-primary mt-8">
              A level of value the larger studios simply can't touch.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark-highlighted to-pink-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-heading">Stop Explaining. Start Showing.</h2>

          <p className="text-xl text-gray-300 mb-8">
            Every day without a powerful fundraising asset, the cost of a complex story grows.
          </p>

          <ul className="text-lg text-gray-300 space-y-4 mb-12 text-left max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="text-pink-primary mr-3">•</span>
              Investors struggle to grasp your science.
            </li>
            <li className="flex items-start">
              <span className="text-pink-primary mr-3">•</span>
              Potential partners miss your key competitive advantage.
            </li>
            <li className="flex items-start">
              <span className="text-pink-primary mr-3">•</span>
              Your momentum is lost in a loop of re-explaining the core science.
            </li>
            <li className="flex items-start">
              <span className="text-pink-primary mr-3">•</span>
              Competitors with clearer stories win the funding that should be yours.
            </li>
          </ul>

          <p className="text-2xl font-semibold text-pink-primary mb-8">
            One powerful fundraising asset solves all of this.
          </p>

          <div className="flex flex-col items-center">
            <AnimatedButton
              text="Book Your Strategy Call →"
              hoverText="Let's Talk!"
              variant="primary"
              size="lg"
              className="mb-4"
            />
            <p className="text-sm text-gray-400 mb-8">30-minute call. No obligation. Takes 2 minutes to book.</p>
          </div>

          <p className="text-lg text-gray-300">
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
