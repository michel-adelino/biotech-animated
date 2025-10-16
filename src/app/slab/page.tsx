'use client';

import { useState } from 'react';
import Layout from '../../components/Layout/Layout';

export default function SLAB() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-highlighted via-dark-main to-dark-highlighted">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-pink-primary/20 opacity-50"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading leading-tight">
            Premium Molecular Assets from Our Production Vault.<br />
            Ready to Deploy in Weeks.
          </h1>
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            A curated vault of molecular and cellular assets. Scientifically accurate. Cinema-quality. Ready to customize.
          </p>
          
          <div className="space-y-4 mb-8 text-lg text-gray-300">
            <p>Tell us what you need in a quick call.</p>
            <p>Get instant loops ready now or custom loops in 3-5 weeks.</p>
            <p>Deploy everywhere.</p>
            <p className="font-semibold text-white">Same PhD quality. Faster delivery.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <div className="flex flex-col items-center">
              <button className="bg-pink-primary hover:bg-pink-primary/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 mb-2">
                Get Started
              </button>
              <p className="text-sm text-gray-400 text-center">15-minute consultation. Custom quote within 24 hours.</p>
            </div>
            <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              See Examples
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-dark-highlighted/50 backdrop-blur-sm border border-dark-highlighted rounded-lg px-6 py-3">
              <span className="text-white font-medium">PhD-Verified</span>
            </div>
            <div className="bg-dark-highlighted/50 backdrop-blur-sm border border-dark-highlighted rounded-lg px-6 py-3">
              <span className="text-white font-medium">Cinema-Quality</span>
            </div>
            <div className="bg-dark-highlighted/50 backdrop-blur-sm border border-dark-highlighted rounded-lg px-6 py-3">
              <span className="text-white font-medium">Fast Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-gradient-to-r from-dark-main to-dark-highlighted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="relative">
              <div className="text-5xl font-bold text-blue-500 mb-4">100+</div>
              <div className="text-lg text-gray-300">Pre-Built Assets<br />Ready to Customize</div>
            </div>
            <div className="relative">
              <div className="text-5xl font-bold text-blue-500 mb-4">3-5 Weeks</div>
              <div className="text-lg text-gray-300">Delivery Timeline</div>
            </div>
            <div className="relative">
              <div className="text-5xl font-bold text-blue-500 mb-4">All Under $6K</div>
              <div className="text-lg text-gray-300">No PO Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is SLAB Section */}
      <section className="py-20 bg-dark-main">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">What Is SLAB?</h2>
            <p className="text-xl text-gray-300">SLAB stands for Seamless Loop Asset Bank. Here's why we built it.</p>
          </div>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>We kept seeing the same pattern. Biotech and pharma companies with incredible science—real innovation, solid teams, important work—but when it came time to present that work to the world, they were stuck with generic stock footage. Visuals that didn't match the quality of their science. Websites that needed an upgrade.</p>
            
            <p>It wasn't for lack of trying. Custom animation solves this perfectly, but it takes months, requires significant budgets, and needs long lead times. Most companies don't have that luxury when they're preparing for a partnership meeting, launching a new website, heading to a conference next month, or building a sales deck.</p>
            
            <p>That's why we built SLAB.</p>
            
            <p><strong className="text-white">For instant needs:</strong> We have pre-made, scientifically accurate loops ready to download immediately. Think premium stock footage that's actually accurate.</p>
            
            <p><strong className="text-white">For custom projects:</strong> We take production-grade components from our library—the same cellular environments we use for our premium work—and customize them to your specific biology. Brand them to your identity. Deliver in 3-5 weeks. Under $6K. No procurement. No waiting.</p>
            
            <div className="bg-dark-highlighted/30 border border-dark-highlighted rounded-lg p-6 mt-8">
              <p className="text-lg text-gray-300 italic">
                Think of it like this: Traditional animation is building a house from blueprints. SLAB is moving into a luxury apartment—either move in as-is today, or customize and move in next month. You get the premium result, just faster and more accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-dark-highlighted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Where SLAB Fits In</h2>
            <p className="text-xl text-gray-300">Three options between stock footage and full custom. Find yours.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-dark-main">
              <thead>
                <tr className="bg-dark-main">
                  <th className="border border-dark-main p-4 text-left text-white font-semibold"></th>
                  <th className="border border-dark-main p-4 text-left text-white font-semibold">Traditional Stock Footage</th>
                  <th className="border border-dark-main p-4 text-left text-white font-semibold bg-blue-500/20">SLAB™ Instant Loop</th>
                  <th className="border border-dark-main p-4 text-left text-white font-semibold bg-blue-500/20">SLAB™ Signature Loop</th>
                  <th className="border border-dark-main p-4 text-left text-white font-semibold bg-blue-500/20">SLAB™ Precision Loop</th>
                  <th className="border border-dark-main p-4 text-left text-white font-semibold">Full Custom Project</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-dark-main/50">
                  <td className="border border-dark-main p-4 font-semibold text-white">What You Get</td>
                  <td className="border border-dark-main p-4 text-gray-300">Generic clip</td>
                  <td className="border border-dark-main p-4 text-gray-300 bg-blue-500/10">Pre-made premium loop</td>
                  <td className="border border-dark-main p-4 text-gray-300 bg-blue-500/10">Branded loop (15 sec)</td>
                  <td className="border border-dark-main p-4 text-gray-300 bg-blue-500/10">Your exact MOA loop (20 sec)</td>
                  <td className="border border-dark-main p-4 text-gray-300">Complete MOA story (2-3 min)</td>
                </tr>
                <tr className="bg-dark-main">
                  <td className="border border-dark-main p-4 font-semibold text-white">Scientific Precision</td>
                  <td className="border border-dark-main p-4 text-gray-300">Basic</td>
                  <td className="border border-dark-main p-4 text-gray-300 bg-blue-500/10">PhD-verified</td>
                  <td className="border border-dark-main p-4 text-gray-300 bg-blue-500/10">PhD-verified</td>
                  <td className="border border-dark-main p-4 text-gray-300 bg-blue-500/10">Your exact science</td>
                  <td className="border border-dark-main p-4 text-gray-300">Your exact science</td>
                </tr>
                <tr className="bg-dark-main/50">
                  <td className="border border-dark-main p-4 font-semibold text-white">Timeline</td>
                  <td className="border border-dark-main p-4 text-gray-300">Instant</td>
                  <td className="border border-dark-main p-4 text-gray-300 bg-blue-500/10">Instant</td>
                  <td className="border border-dark-main p-4 text-gray-300 bg-blue-500/10">3-4 weeks</td>
                  <td className="border border-dark-main p-4 text-gray-300 bg-blue-500/10">4-5 weeks</td>
                  <td className="border border-dark-main p-4 text-gray-300">Significant</td>
                </tr>
                <tr className="bg-dark-main">
                  <td className="border border-dark-main p-4 font-semibold text-white">Investment</td>
                  <td className="border border-dark-main p-4 text-gray-300">Budget</td>
                  <td className="border border-dark-main p-4 text-gray-300 bg-blue-500/10">Accessible</td>
                  <td className="border border-dark-main p-4 text-gray-300 bg-blue-500/10">Accessible</td>
                  <td className="border border-dark-main p-4 text-gray-300 bg-blue-500/10">Accessible</td>
                  <td className="border border-dark-main p-4 text-gray-300">Significant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-dark-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Three Options. One Simple Choice.</h2>
            <p className="text-xl text-gray-300">Same PhD team. Same scientific rigor. Choose your level of customization.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instant Loop */}
            <div className="bg-dark-highlighted border border-dark-highlighted rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">INSTANT LOOP™</h3>
              <p className="text-lg text-blue-500 italic mb-4">Premium Stock. Ready Now.</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pre-made, scientifically accurate loops from our production library. What stock footage should be but never is.
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-4">Includes:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">10-15 seconds seamless</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">4K resolution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">Immediate download</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">PhD-verified accuracy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-500">✗</span>
                    <span className="text-gray-300">Brand customization</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-400 italic mb-6">
                <strong>Ideal For:</strong> Companies needing professional visuals immediately without scientific customization
              </p>
              
              <button className="w-full bg-pink-primary hover:bg-pink-primary/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Signature Loop */}
            <div className="bg-dark-highlighted border border-dark-highlighted rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">SIGNATURE LOOP™</h3>
              <p className="text-lg text-blue-500 italic mb-4">Brand-Matched Speed</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform our library assets into your branded loop. Perfect when you need premium quality fast.
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-4">Includes:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">Up to 15 seconds seamless</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">Your brand colors & style</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">3-4 week delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">One revision round</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-500">✗</span>
                    <span className="text-gray-300">Scientific customization</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-400 italic mb-6">
                <strong>Ideal For:</strong> Companies needing visual credibility with brand consistency but without scientific specificity
              </p>
              
              <button className="w-full bg-pink-primary hover:bg-pink-primary/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Precision Loop */}
            <div className="bg-dark-highlighted border border-dark-highlighted rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">PRECISION LOOP™</h3>
              <p className="text-lg text-blue-500 italic mb-4">Scientific Accuracy Guaranteed</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your exact molecular structure. Your specific MOA. Built to withstand scientific scrutiny.
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-4">Includes:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">Up to 20 seconds seamless</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">Your exact structure & target</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">Complete scientific customization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">4 high-resolution still images</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">4-5 week delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">Two revision rounds</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-400 italic mb-6">
                <strong>Ideal For:</strong> Companies presenting to technical audiences or partners requiring scientific precision
              </p>
              
              <button className="w-full bg-pink-primary hover:bg-pink-primary/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SLAB in Action Section */}
      <section className="py-20 bg-dark-highlighted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">SLAB in Action</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Every looping asset on this website is a SLAB asset. This is the quality you get. Three more examples below—no overlays, just the visual detail.
            </p>
          </div>
          
          <div className="space-y-16">
            <div>
              <div className="w-full aspect-video bg-gradient-to-br from-blue-500/20 to-pink-primary/20 border-2 border-dark-main rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-gray-400">
                  <div className="text-lg font-semibold">[ Full-Width SLAB Loop Video ]</div>
                  <div className="text-sm">Antibody-Drug Conjugate Mechanism</div>
                  <div className="text-xs">800x600px minimum display</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center">Antibody-Drug Conjugate Mechanism</h3>
            </div>

            <div>
              <div className="w-full aspect-video bg-gradient-to-br from-blue-500/20 to-pink-primary/20 border-2 border-dark-main rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-gray-400">
                  <div className="text-lg font-semibold">[ Full-Width SLAB Loop Video ]</div>
                  <div className="text-sm">CAR-T Cell Engagement</div>
                  <div className="text-xs">800x600px minimum display</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center">CAR-T Cell Engagement</h3>
            </div>

            <div>
              <div className="w-full aspect-video bg-gradient-to-br from-blue-500/20 to-pink-primary/20 border-2 border-dark-main rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-gray-400">
                  <div className="text-lg font-semibold">[ Full-Width SLAB Loop Video ]</div>
                  <div className="text-sm">Bacterial Sepsis</div>
                  <div className="text-xs">800x600px minimum display</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center">Bacterial Sepsis</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-dark-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Simple Process. Fast Results.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="bg-dark-highlighted rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Quick Consultation</h4>
              <p className="text-gray-300 text-sm">15-minute call to understand what you need and when you need it.</p>
            </div>
            
            <div className="bg-dark-highlighted rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Internal Review</h4>
              <p className="text-gray-300 text-sm">We review our asset library to see what's available. Takes 2 business days.</p>
            </div>
            
            <div className="bg-dark-highlighted rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Options Delivered</h4>
              <p className="text-gray-300 text-sm">We present your options: instant loops ready now, or custom builds with timeline and pricing.</p>
            </div>
            
            <div className="bg-dark-highlighted rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">04</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">You Choose</h4>
              <p className="text-gray-300 text-sm">Select the option that fits your timeline and budget. No pressure, just clarity.</p>
            </div>
            
            <div className="bg-dark-highlighted rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">05</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Delivery & Deployment</h4>
              <p className="text-gray-300 text-sm">Instant loops download immediately. Custom loops deliver in 3-5 weeks. Multiple format options available—ready for web, deck, booth, wherever you need them.</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-lg px-6 py-3">
              <span className="text-xl font-semibold text-blue-500">Timeline: Instant to 5 weeks, depending on your choice.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Library Section */}
      <section className="py-20 bg-dark-highlighted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Inside the SLAB Asset Bank</h2>
            <p className="text-xl text-gray-300">Our biological components include:</p>
          </div>

          <div className="space-y-4">
            {[
              {
                id: 'cells',
                title: 'Cells & Cellular Components',
                content: 'B-Cells • Cancer Cells • Centrosomes • Dendritic Cells • Epithelial Cells • Fibroblasts • Hair Follicles • Hepatocytes • Kidney Cells • Leukocytes • Macrophages • Mitochondria • Natural Killer (NK) Cells • Neurons • Ovaries & Follicles • Pancreatic Beta Cells • PBMCs (Peripheral Blood Mononuclear Cells) • Phagocytes • Photoreceptor Cells • Platelets • Red Blood Cells • Retinal Stem Cells • T-Cells • Tumor Microenvironments'
              },
              {
                id: 'proteins',
                title: 'Proteins, Receptors & Enzymes',
                content: 'ACE2 Receptors • Albumin • Alpha-Synuclein Proteins • Amyloid-β Oligomers • Antibodies (IgG, Polyclonal, Monoclonal) • Antibody Fragments (scFv, di-scFv) • Antigens • Aquaporins • ATP Synthase • Cadherin-17 (CDH17) • CAR (Chimeric Antigen Receptor) • CD3 • CD40L • Checkpoint Inhibitor Molecules • Cytokines • Deubiquitinating Enzymes (DUBs) • DNA Polymerase • Dynein Motors • E3 Ligases • Electron Transport Chain Complexes • Endocannabinoid Receptors • G-Protein-Coupled Receptors (GPCRs) • GM-CSF • Helicase • Heterotrimeric G-Proteins • Histones • HLA Molecules • Insulin • Integrins • Interferon-gamma (IFN-γ) • Interleukin-12 (IL-12) • Ion Channels • Kinesin Motors • Kinetochores • Luciferase • MHC Monomers & Tetramers • Myosin Motors • NMDA Receptors • OX40L • Phosphodiesterases (PDEs) • Photosystems I & II • Primase • Protein A/G • Receptor Tyrosine Kinases (RTKs) • Signal Recognition Particles (SRP) • Single Domain Antibodies (Nanobodies) • Streptavidin • Topoisomerase • Transporter Proteins • Transposase • Ubiquitin • URAT1 Transporters • USP30'
              },
              {
                id: 'dna',
                title: 'DNA, RNA & Genetic Machinery',
                content: 'cDNA • Chromatin Fibers • Circulating Tumor DNA (ctDNA) • DNA (Double Helix) • Fully Condensed Chromosomes • mRNA • Nuclear Pore Complexes (NPC) • Nucleosomes • Oligonucleotides • Peptide Nucleic Acids (PNAs) • Plasmids • Proteasomes • Replisomes • Ribosomes • RNA Polymerase Complexes • siRNA / MicroRNA • Spliceosomes • Telomerase • Transposons • tRNA'
              },
              {
                id: 'structural',
                title: 'Structural & Extracellular Matrix Components',
                content: 'Actin Filaments • Adherens Junctions • Bacterial Biofilms • Blood Vessels • Clathrin-Coated Vesicles • Collagen • Desmosomes • Fibronectin • Gap Junctions • Immune Complex Lattices • Immunological Synapses • Intermediate Filaments • Lipid Rafts • Microtubules • Misfolded Protein Aggregates • Mitotic Spindles • Phospholipid Bilayers • Reactive Oxygen Species (ROS) • Sarcomeres • SNARE Complexes • Tight Junctions • Tophi (Uric Acid Crystals)'
              },
              {
                id: 'therapeutic',
                title: 'Therapeutic & Delivery Systems',
                content: 'Antibody-Drug Conjugates (ADCs) • Bispecific T-Cell Engagers • Dendrimers • Lipid Mediators • Microbubbles • Nanoparticles • Oncolytic Viruses • Peptide Therapeutics • Photosensitizing Agents • RNA Therapeutic Nanoparticles • Small Molecule Drugs • Synthetic Polymers'
              }
            ].map((item) => (
              <div key={item.id} className="bg-dark-main border border-dark-highlighted rounded-lg overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-dark-highlighted/50 transition-colors flex justify-between items-center"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <h3 className="text-xl font-semibold text-white">{activeAccordion === item.id ? '▼' : '▶'} {item.title}</h3>
                  <span className="text-blue-500 text-xl">▼</span>
                </div>
                {activeAccordion === item.id && (
                  <div className="p-6 border-t border-dark-highlighted text-gray-300 leading-relaxed">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-dark-main border border-dark-highlighted rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Therapeutic Areas</h3>
            <p className="text-lg text-blue-500 mb-4">
              <strong>Our asset library spans multiple disease areas and disciplines:</strong>
            </p>
            <p className="text-gray-300">
              Oncology • Infectious Disease • Neurology & CNS Disorders • Immunology & Inflammation • Metabolic & Endocrine Disorders • Nephrology • Cardiovascular & Pulmonary • Fibrosis • Regenerative Medicine & Cell Therapy • Diagnostics & Research Tools
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-main">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                id: 'q1',
                question: 'What\'s the difference between Instant Loop and regular stock footage?',
                answer: 'Traditional stock footage is generic, often scientifically imprecise, and looks the same across every biotech website. Instant Loops are pre-made but scientifically precise, PhD-verified, and built to the same quality standards as our custom work—what stock footage should be but never is.'
              },
              {
                id: 'q2',
                question: 'How is SLAB different from stock footage?',
                answer: 'Stock footage is generic, made for everyone, and usually scientifically imprecise. SLAB (all three tiers) is verified by our PhD team for scientific precision. Signature is customized to your brand identity, while Precision is both scientifically customized to your MOA and branded to your identity.'
              },
              {
                id: 'q3',
                question: 'How is this different from your full custom animation service?',
                answer: 'Full custom animation is a complete 2-3 minute MOA story with multiple scenes and transitions, taking a significant amount of time. SLAB is one looping scene (10-20 seconds depending on tier) delivered instantly to 5 weeks. Different scope, different timeline, same quality.'
              },
              {
                id: 'q4',
                question: 'What if I need my exact molecular structure and specific receptor visualized?',
                answer: 'That\'s what the Precision Loop is for. We build your exact biomolecular structure from your specifications—your specific target, your specific interaction, scientifically accurate to your biology.'
              },
              {
                id: 'q5',
                question: 'What formats do I receive?',
                answer: 'Instant Loop and Signature Loop include one video file in MP4 and MOV formats. Precision Loop includes video files plus 4 high-resolution still images for presentations and web use.'
              },
              {
                id: 'q6',
                question: 'What\'s your revision policy?',
                answer: 'Instant Loop has no revisions (pre-made asset). Signature Loop includes one revision round. Precision Loop includes two revision rounds. Additional revisions are available if needed for custom tiers.'
              },
              {
                id: 'q7',
                question: 'How do I get started?',
                answer: 'Book a 15-minute consultation call to tell us about your science and what you\'re looking for. We\'ll review our asset library (takes 2 business days) and get back to you with options—instant loops if we have something ready, or custom builds with timeline and pricing. You choose what fits, and we deliver.'
              }
            ].map((faq) => (
              <div key={faq.id} className="border-b border-dark-highlighted pb-4">
                <div 
                  className="p-4 cursor-pointer hover:bg-dark-highlighted/30 rounded-lg transition-colors flex justify-between items-center"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <span className="text-blue-500 text-xl">{activeFaq === faq.id ? '▲' : '▼'}</span>
                </div>
                {activeFaq === faq.id && (
                  <div className="p-4 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark-highlighted to-pink-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-heading">Get Premium Visuals. Skip the Wait.</h2>
          
          <div className="text-xl text-gray-300 mb-8 space-y-4">
            <p>You've seen the quality.</p>
            <p>You've seen the options.</p>
            <p>You've seen the timeline.</p>
            <p>Book a 15-minute call.</p>
            <p>Tell us what you need.</p>
            <p>Get your SLAB asset.</p>
          </div>
          
          <button className="bg-pink-primary hover:bg-pink-primary/90 text-white font-semibold py-5 px-12 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>
      </section>
    </Layout>
  );
}

