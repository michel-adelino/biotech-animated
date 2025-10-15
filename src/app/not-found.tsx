'use client';

import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import { Button } from '../components';

export default function NotFound() {
  return (
    <Layout>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/1.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="w-full h-full bg-gradient-to-br from-dark-highlighted via-dark-main to-pink-primary/30"></div>
          </video>
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-dark-main/50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-dark-highlighted/50 via-transparent to-pink-primary/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-pink-primary font-heading mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have vanished into the molecular void. 
              Don't worry, even the best scientific experiments sometimes lead to unexpected results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              href="/"
              className="w-full"
            >
              <Button
                text="Return Home"
                variant="primary"
                className="w-56 rounded-3xl text-[16px]"
                onClick={() => console.log('Return Home')}
              />
            </Link>
          </div>

          {/* Scientific Quote */}
          <div className="mt-12 max-w-3xl mx-auto">
            <blockquote className="text-lg text-gray-400 italic">
              "In science, every 'failed' experiment is actually a successful discovery of what doesn't work. 
              The same principle applies to navigation—every wrong turn teaches us something new."
            </blockquote>
            <cite className="text-sm text-gray-500 mt-2 block">
              — Biomol Visual Team
            </cite>
          </div>
        </div>
      </div>
    </Layout>
  );
}
