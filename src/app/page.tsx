export default function Home() {
  return (
    <div className="min-h-screen bg-dark-main text-white">
      {/* Navigation */}
      <nav className="border-b border-dark-highlighted bg-dark-highlighted/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-pink-primary font-heading">Biotech</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:text-pink-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#" className="text-gray-300 hover:text-pink-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#" className="text-gray-300 hover:text-pink-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#" className="text-gray-300 hover:text-pink-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
              Revolutionary
              <span className="text-pink-primary block">Biotech Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harnessing the power of cutting-edge biotechnology to create innovative solutions 
              that transform healthcare and improve lives worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pink-primary hover:bg-pink-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="border border-pink-primary text-pink-primary hover:bg-pink-primary hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-dark-highlighted py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Our Expertise</h2>
              <p className="text-gray-300 text-lg">Leading the future of biotechnology</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-dark-main p-8 rounded-lg border border-dark-highlighted hover:border-pink-primary/50 transition-colors">
                <div className="w-12 h-12 bg-pink-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-pink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-heading">Research & Development</h3>
                <p className="text-gray-300">Cutting-edge research in molecular biology, genetics, and pharmaceutical development.</p>
              </div>

              <div className="bg-dark-main p-8 rounded-lg border border-dark-highlighted hover:border-pink-primary/50 transition-colors">
                <div className="w-12 h-12 bg-pink-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-pink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-heading">Healthcare Innovation</h3>
                <p className="text-gray-300">Revolutionary treatments and diagnostic tools that improve patient outcomes.</p>
              </div>

              <div className="bg-dark-main p-8 rounded-lg border border-dark-highlighted hover:border-pink-primary/50 transition-colors">
                <div className="w-12 h-12 bg-pink-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-pink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-heading">Technology Integration</h3>
                <p className="text-gray-300">Advanced AI and machine learning applications in biotechnology and healthcare.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in revolutionizing biotechnology and creating a healthier future for all.
            </p>
            <button className="bg-pink-primary hover:bg-pink-primary/90 text-white font-semibold py-4 px-12 rounded-lg text-lg transition-colors">
              Start Your Journey
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark-highlighted border-t border-dark-highlighted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-pink-primary mb-4 font-heading">Biotech</h3>
              <p className="text-gray-300 mb-4">
                Leading the future of biotechnology with innovative solutions and cutting-edge research.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 font-heading">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-pink-primary transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-pink-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-pink-primary transition-colors">News</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 font-heading">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-pink-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-pink-primary transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-pink-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-dark-main mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Biotech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
