export default function Footer() {
  return (
    <footer className="bg-dark-highlighted border-t border-dark-highlighted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="">
            <img 
              src="/images/logo.png" 
              alt="Biomol Visual" 
              className="h-20 mb-4"
            />
            <p className="text-sm text-gray-400 mb-4">Molecular and Cellular MOA & MOD Visualization Specialists</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              We create scientifically precise molecular and cellular mechanism of action visualizations for the world's most innovative biotech companies. Our dedicated team of scientific experts transforms complex science—from biotherapeutic mechanisms to platform technologies—into clear stories that secure funding and drive partnerships.
            </p>
          </div>
          
          <div>
            <h4 className="text-coral-primary font-semibold mb-4 font-heading tracking-[1px]">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Molecular & Cellular MOA Visualization</li>
              <li>Mechanism of Disease (MOD) Visualization</li>
              <li>Biotherapeutic Mechanism Visualization</li>
              <li>Platform Technology Visualization</li>
              <li>Scientific Storytelling</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-coral-primary font-semibold mb-4 font-heading tracking-[1px]">Applications</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Series A/B/C Fundraising</li>
              <li>Investor Communications</li>
              <li>BD Partnerships</li>
              <li>FDA Presentations</li>
              <li>Conference Launches</li>
              <li>Sales Enablement</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-main pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 Biomol Visual | Clarity in Every MOA.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#terms" className="text-white py-2 rounded-md text-sm font-medium transition-colors relative group">
              <span className="relative z-10">Terms of Service</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#privacy" className="text-white py-2 rounded-md text-sm font-medium transition-colors relative group">
              <span className="relative z-10">Privacy Policy</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#careers" className="text-white py-2 rounded-md text-sm font-medium transition-colors relative group">
              <span className="relative z-10">Careers</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
