import Layout from '../../components/Layout/Layout';

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">About Biomol Visual</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in transforming complex molecular science into compelling visual stories that secure funding and drive partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-pink-primary mb-6 font-heading">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To bridge the gap between complex scientific research and investor understanding through precise, 
                compelling molecular visualizations that accelerate biotech innovation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe that every breakthrough deserves a clear story that gets funded.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-pink-primary mb-6 font-heading">Our Approach</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our PhD-level scientific team combines deep molecular biology expertise with cutting-edge 
                visualization technology to create assets that win investor confidence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We focus exclusively on molecular and cellular mechanisms of action, ensuring every 
                visualization is scientifically accurate and strategically compelling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
