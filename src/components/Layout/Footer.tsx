export default function Footer() {
  return (
    <footer className="bg-dark-highlighted border-t border-dark-highlighted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-pink-primary mb-4 font-heading">Biomol Visual</h3>
            <p className="text-sm text-gray-400 mb-4">Molecular and Cellular MOA & MOD Visualization Specialists</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              We create scientifically precise molecular and cellular mechanism of action visualizations for the world's most innovative biotech companies. Our dedicated team of scientific experts transforms complex science—from biotherapeutic mechanisms to platform technologies—into clear stories that secure funding and drive partnerships.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 font-heading">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Molecular & Cellular MOA Visualization</li>
              <li>Mechanism of Disease (MOD) Visualization</li>
              <li>Biotherapeutic Mechanism Visualization</li>
              <li>Platform Technology Visualization</li>
              <li>Scientific Storytelling</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 font-heading">Applications</h4>
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
            <a href="#terms" className="text-gray-400 hover:text-pink-primary transition-colors">Terms of Service</a>
            <a href="#privacy" className="text-gray-400 hover:text-pink-primary transition-colors">Privacy Policy</a>
            <a href="#careers" className="text-gray-400 hover:text-pink-primary transition-colors">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
