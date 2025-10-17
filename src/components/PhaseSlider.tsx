'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const phases = [
  {
    id: 1,
    title: "Strategy & Storyboard",
    description: "We start with a deep dive into your science, developing a script and visual storyboard. You approve the complete strategic and narrative plan before anything is built."
  },
  {
    id: 2,
    title: "Design & Animatic",
    description: "Next, we define the visual universe for your project. You approve the final look and feel with Style Frames and the precise timing with an Animatic, ensuring perfect alignment before production begins."
  },
  {
    id: 3,
    title: "Production & Post-Production",
    description: "With the blueprint approved, our dedicated team of scientific experts brings the vision to life through 3D modeling, animation, and cinematic post-production."
  },
  {
    id: 4,
    title: "Final Delivery",
    description: "You receive the final, high-resolution visualization, ready for your investor meeting, conference presentation, or website launch."
  },
  {
    id: 5,
    title: "Strategic Deployment",
    description: "Finally, we activate your new asset. The same scientific experts who built your visualization work directly with your team to guide its strategic deployment, maximizing its value long after delivery."
  }
];

export default function PhaseSlider() {
  return (
    <section className="hidden md:block bg-dark-main">
      <div className="min-h-full px-8 pt-24">
        <div className="flex flex-col gap-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading tracking-[0.04rem] leading-[3.5rem] pr-16 flex-shrink-0">
            A Simple 5-Phase System
          </h1>

          <div className="flex-1 min-w-0 overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView="auto"
              grabCursor={true}
              freeMode={false}
              centeredSlides={false}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={false}
              className="phase-swiper"
              allowTouchMove={true}
              resistance={true}
              resistanceRatio={0.85}
            >
              {phases.map((phase) => (
                <SwiperSlide key={phase.id}>
                  <div className="h-[560px] flex flex-col p-8 border border-white/10 hover:border-t-coral-primary hover:border-t-8 transition-all duration-300">
                    <div className="flex items-center justify-start mb-8">
                      <span className="text-1xl md:text-2xl font-bold text-white/50">PHASE {phase.id}</span>
                      <div className="w-4 h-4 bg-coral-primary ml-4"></div>
                    </div>
                    <div className="flex-1 gap-4 flex flex-col justify-end h-full">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
                        {phase.title}
                      </h3>
                      <div className="text-xl text-white/50 leading-7 min-h-[200px]">
                        {phase.description}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button className="swiper-button-prev-custom bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button className="swiper-button-next-custom bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
