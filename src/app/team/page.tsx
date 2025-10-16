'use client';

import { useState } from 'react';
import Layout from '../../components/Layout/Layout';

export default function Team() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newState = { ...prev };
      // Close all other sections
      Object.keys(newState).forEach(key => {
        if (key !== sectionId) {
          newState[key] = false;
        }
      });
      // Toggle current section
      newState[sectionId] = !newState[sectionId];
      return newState;
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const teamMembers = [
    {
      id: 'ksenia',
      name: 'Ksenia Timonina, PhD',
      title: 'Scientific Managing Director',
      credentials: 'PhD Cell/Cellular and Molecular Biology, York University',
      location: '📍 Toronto, Canada | EST',
      hook: '"Your project runs like a perfectly orchestrated symphony."',
      description: "I've spent 10+ years at the intersection of molecular biology research and biotech entrepreneurship. As co-founder of a funded startup, I know exactly what investors scrutinize in your MOA animations because I've sat on both sides of the table. Every project I manage gets the same rigorous scientific review I gave my own peer-reviewed publications—but delivered with the strategic clarity that gets you funded.",
      stats: [
        { number: '10+', label: 'Years' },
        { number: '5', label: 'Publications' },
        { number: 'Startup', label: 'Co-Founder' }
      ],
      scientificBackground: {
        education: [
          'PhD Cell/Cellular and Molecular Biology, York University',
          'Research focus: Membrane proteins, cellular signaling',
          'Notable honors and scholarships'
        ],
        research: [
          '5 peer-reviewed publications',
          'First-author paper in Biomolecules',
          'Expertise in membrane proteins and cellular signaling pathways',
          'Notable findings in protein structure-function relationships'
        ],
        experience: [
          'Scientific Managing Director, Biomol Visual (2+ years)',
          'Co-founder, Agenek (funded biotech startup)',
          'Project management for 50+ biotech clients'
        ],
        technical: [
          'Software: PyMOL, Chimera, visualization platforms',
          'Methods: Protein structure analysis, cellular imaging',
          'Specializations: Immunology, oncology therapeutics'
        ]
      },
      businessValue: [
        "Ksenia's dual experience as both scientist and startup founder means she understands exactly what investors look for in MOA animations—scientific rigor meets strategic clarity.",
        "Her 5 peer-reviewed publications ensure every frame passes the same scrutiny as a journal submission, catching errors before your board presentation.",
        "As co-founder of a funded startup, she's secured millions in funding herself and knows which molecular details matter most to investors versus which ones distract.",
        "Managing 50+ projects means your timeline is protected by battle-tested workflows that account for every revision cycle and stakeholder approval."
      ],
      personalBio: "When not managing projects, Ksenia draws on her Level 9 Piano certification to bring orchestral precision to project timelines. She believes great science communication, like great music, requires both technical mastery and emotional resonance. Her startup experience taught her that the best MOA animations don't just explain mechanisms—they tell compelling stories that make investors lean forward."
    },
    {
      id: 'isabel',
      name: 'Isabel Cordova, PhD',
      title: 'Scientific Director',
      credentials: 'PhD Biomedical Sciences, UC San Diego (3.9 GPA)',
      location: '📍 San Diego, CA | PST',
      hook: '"Quiet in meetings, returns with visual solutions that make executives say \'That\'s exactly it.\'"',
      description: "I'm the founding team member who's transformed 100+ investor decks from 200-slide data dumps into 3-minute visual stories that close funding rounds. With 8 peer-reviewed publications including first-author papers in JBC and PNAS, I bring the same scientific rigor to your animation that I brought to my GPCR research—but I've learned that investors care more about 'Why should I fund this?' than 'Look at all this data.'",
      stats: [
        { number: '10+', label: 'Years' },
        { number: '100+', label: 'Projects' },
        { number: '8', label: 'Publications' }
      ],
      scientificBackground: {
        education: [
          'PhD Biomedical Sciences, UC San Diego (3.9 GPA)',
          'Research focus: GPCR signaling, protein trafficking',
          'Graduate with distinction'
        ],
        research: [
          '8 peer-reviewed publications',
          'First-author papers in Journal of Biological Chemistry and PNAS',
          'GPCR and protein trafficking expert',
          'Notable contributions to understanding receptor signaling pathways'
        ],
        experience: [
          'Scientific Director, Biomol Visual (10+ years)',
          'Founding team member since 2015',
          '100+ completed animations with zero scientific revision rate',
          'Specializes in complex mechanism storytelling'
        ],
        technical: [
          'GPCR signaling pathways',
          'Protein trafficking mechanisms',
          'Complex molecular storytelling'
        ]
      },
      businessValue: [
        "Isabel's 100+ completed projects mean your script and storyboard process takes 2 weeks instead of 6—she's seen every molecular mechanism pattern.",
        "Her zero scientific revision rate means you won't waste rounds of feedback on basic biology errors that other animators miss.",
        "As a founding team member since 2015, she's refined the exact workflow that takes your 200-slide deck and distills it into a 3-minute story investors actually remember.",
        "Her first-author publications in JBC and PNAS mean she can translate complex GPCR mechanisms into visuals that satisfy both your CSO and your Series A investors."
      ],
      personalBio: "Isabel is famously quiet in initial client meetings, preferring to absorb your science first. But she returns with visual solutions that make executives say 'That's exactly it'—solutions she claims come from marathon video game sessions where complex game mechanics taught her how to visualize intricate systems. Her creative genius works best when given space to process, which is why clients learn to trust her disappearances followed by breakthrough storyboards."
    },
    {
      id: 'andrew',
      name: 'Andrew Catalano, PhD',
      title: 'Senior Scientific Animator',
      credentials: 'PhD Cell and Systems Biology, University of Toronto',
      location: '📍 Toronto, Canada | EST',
      hook: '"I don\'t just animate proteins—I\'ve crystallized them at 4.1 Å resolution."',
      description: "Most scientific animators learn protein structures from textbooks. I learned them by spending years crystallizing proteins in the lab, solving their structures with X-ray crystallography, and publishing the results in eLife. When you see a protein conformation in my animations, it's not just visually appealing—it's atomically accurate because I've actually seen these structures at angstrom-level resolution. That difference catches errors before your scientific advisory board does.",
      stats: [
        { number: '14', label: 'Publications' },
        { number: '4.1Å', label: 'Resolution' },
        { number: '100+', label: 'Students' }
      ],
      scientificBackground: {
        education: [
          'PhD Cell and Systems Biology, University of Toronto',
          'Specialization in X-ray crystallography and structural biology',
          'Published structures at 4.1 Å resolution'
        ],
        research: [
          '14 peer-reviewed publications, 5 first-author',
          'Published protein structures in eLife',
          'Hands-on experience with X-ray crystallography',
          'Structural biology and protein conformational analysis'
        ],
        experience: [
          'Senior Scientific Animator, Biomol Visual',
          'Founder, Smart Biology educational platform',
          'University of Toronto instructor (100+ students)',
          'Teaching innovation award winner'
        ],
        technical: [
          'X-ray crystallography',
          'Protein structure analysis',
          'Educational platform development'
        ]
      },
      businessValue: [
        "Andrew's decade of hands-on structural biology means he catches protein conformational errors that other animators miss—before your scientific advisory board sees them.",
        "His experience actually crystallizing proteins means he understands which conformational states are physically possible versus which ones look good but violate biophysics.",
        "As a University of Toronto instructor who taught 100+ students, he knows how to explain complex mechanisms in ways that make sense to both technical and non-technical audiences.",
        "His Smart Biology platform demonstrates his ability to take dense scientific concepts and transform them into educational content that actually sticks—the same skill your investor presentations need."
      ],
      personalBio: "Andrew founded Smart Biology, an educational textbook platform that's won teaching innovation awards. His passion for making complex science accessible drives everything he creates—whether it's teaching undergrads or visualizing your novel therapeutic mechanism. He believes the best scientific visualizations should feel like 'aha!' moments, not homework assignments, which is why investors watching his animations often say they finally understand mechanisms their own scientists couldn't explain clearly."
    },
    {
      id: 'ushma',
      name: 'Ushma Patel, MS',
      title: 'Art Director',
      credentials: 'MS Biomedical Visualization, UIC | BS Neuroscience (Summa Cum Laude)',
      location: '📍 Chicago, IL | CST',
      hook: '"Best ideas come from gaming and walks—where complex systems reveal their visual logic."',
      description: "I spent 3+ years in molecular biology labs before realizing my real talent was translating dense science into visuals that make people feel something. Now, as Art Director for 100+ award-winning animations (2024 Pixie Award, AMI Award), I define the visual tone that turns your mechanism into a memorable story. My neuroscience background means I understand how audiences process visual information—and how to make your MOA the one investors remember weeks later.",
      stats: [
        { number: '5+', label: 'Years' },
        { number: '100+', label: 'Animations' },
        { number: '2', label: 'Awards 2024' }
      ],
      scientificBackground: {
        education: [
          'MS Biomedical Visualization, University of Illinois Chicago',
          'BS Neuroscience (Summa Cum Laude)',
          '3+ years molecular biology lab experience'
        ],
        research: [
          '4 peer-reviewed papers in neuroscience',
          'Co-author in Nature Methods (2025)',
          'Hands-on lab work in molecular biology',
          'Visual neuroscience research'
        ],
        experience: [
          'Art Director, Biomol Visual (5+ years)',
          '2024 Pixie Award winner',
          '2024 AMI Award winner',
          '100+ animations art directed'
        ],
        technical: [
          'Biomedical visualization',
          'Visual neuroscience',
          'Award-winning art direction'
        ]
      },
      businessValue: [
        "Ushma's 5+ years perfecting visual direction means your animation won't look like every other MOA video—it'll have a distinct visual identity that makes investors remember your company.",
        "Her dual Pixie and AMI awards in 2024 prove she creates work that stands out in the crowded biotech visualization space—the same differentiation your pitch deck needs.",
        "As the art director for 100+ animations, she's developed a proven visual language that balances scientific accuracy with emotional impact—making complex mechanisms feel intuitive.",
        "Her neuroscience background means she understands how human brains process visual information, so she designs animations that investors understand immediately rather than having to replay three times."
      ],
      personalBio: "Ushma's best visual concepts emerge during gaming sessions and long walks, where she studies how complex game mechanics teach players intricate systems through visual design. This approach translates directly to MOA animations—teaching investors your mechanism the way great games teach mechanics: through intuitive visual logic rather than overwhelming data dumps. She's convinced that the future of scientific communication looks more like interactive storytelling than traditional science publishing."
    },
    {
      id: 'benjamin',
      name: 'Benjamin Denton',
      title: 'Founder & CEO',
      credentials: 'BSc Biotechnology (Honours), University College London',
      location: '📍 London, UK | GMT',
      hook: '"Still gets nightmares about Comic Sans in investor presentations."',
      description: "I founded Biomol Visual with one obsessive focus: creating MOA animations that help biotech founders close funding rounds. Before this, I spent years in pharma business development at ChemDiv managing a 1.5M+ compound library, then built and sold a wellness business, then scaled a nonprofit from 12 kids to 70+ members. I've started, grown, and exited ventures in three different industries. Now I apply that pattern-recognition to one thing: the exact visual storytelling that turns 'interesting science' into 'we need to invest.'",
      stats: [
        { number: '3', label: 'Ventures' },
        { number: '1.5M+', label: 'Compounds' },
        { number: '$M+', label: 'Raised' }
      ],
      scientificBackground: {
        education: [
          'BSc Biotechnology (Honours), University College London',
          'Specialization in pharmaceutical sciences',
          'Business development training in pharma industry'
        ],
        research: [
          'Pharma business development expertise',
          '1.5M+ compound library management',
          'International operations experience'
        ],
        experience: [
          'Founder & CEO, Biomol Visual (current)',
          'ChemDiv Inc. - Business Development (1.5M+ compound library management)',
          'Serial entrepreneur: wellness business (sold), nonprofit leader (12→70 members)',
          'International operations: US/UK markets'
        ],
        technical: [
          'Business development',
          'International operations',
          'Venture scaling'
        ]
      },
      businessValue: [
        "Benjamin's pharma business development background at ChemDiv means he understands drug development from the commercial side—he knows which mechanisms investors find compelling versus which ones are scientifically interesting but commercially risky.",
        "As a serial entrepreneur who's built and exited ventures in three industries, he's sat through hundreds of investor pitches and knows exactly where MOA animations succeed or fail in closing deals.",
        "His obsession with design quality (those Comic Sans nightmares) means your final animation meets the premium visual standards that signal serious science to serious investors.",
        "Having built international US/UK operations, he understands both FDA and EMA regulatory narratives—ensuring your MOA works for investors on both sides of the Atlantic."
      ],
      personalBio: "Benjamin's entrepreneurial journey spans biotechnology, wellness, and youth sports—each venture teaching him how to scale operations while maintaining quality. He transformed a struggling 12-kid swim club into a thriving 70-member organization using the same principles he applies to Biomol Visual: obsessive attention to detail, clear communication, and building systems that deliver consistent excellence. His 'Comic Sans nightmares' joke masks a genuine belief that design quality signals credibility—and that bad typography can kill million-dollar opportunities."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark-highlighted via-dark-main to-dark-highlighted">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-primary/20 opacity-50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading leading-tight">
            Scientific Leadership Team
          </h1>
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            A small team of senior scientific experts who guide every phase of your project.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We're not a production line. We're a precision team. While larger studios deploy dozens of generalists across hundreds of projects, your entire visualization stays with the same dedicated experts from first call to final frame. Deep scientific expertise. Total project ownership. Zero handoffs.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-dark-main border-b border-dark-highlighted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => scrollToSection(member.id)}
                className="text-center cursor-pointer transition-transform duration-300 hover:scale-105 group"
              >
                <div className="w-20 h-20 bg-dark-highlighted rounded-full mb-3 mx-auto flex items-center justify-center border-2 border-transparent group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all duration-300">
                  <span className="text-gray-400 text-sm">Photo</span>
                </div>
                <div className="text-sm font-medium text-white mb-1">{member.name.split(',')[0]}</div>
                <div className="text-xs text-blue-500">{member.title}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Profiles */}
      {teamMembers.map((member, index) => (
        <section key={member.id} id={member.id} className="py-20 bg-dark-main">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Photo */}
              <div className="lg:sticky lg:top-24">
                <div className="w-full h-96 bg-dark-highlighted rounded-xl mb-4 flex items-center justify-center text-gray-400">
                  <span className="text-sm">500px × 600px Photo</span>
                </div>
                <div className="text-sm text-gray-400">{member.location}</div>
              </div>

              {/* Right Column - Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">{member.name}</h2>
                <h3 className="text-xl text-blue-500 mb-4">{member.title}</h3>
                <p className="text-gray-300 mb-6">{member.credentials}</p>

                <p className="text-xl text-purple-400 italic mb-6 leading-relaxed">{member.hook}</p>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">{member.description}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-dark-highlighted/30 rounded-lg">
                  {member.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-2xl font-bold text-pink-primary mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <button
                    onClick={() => toggleSection(`${member.id}-scientific`)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    📖 Full Scientific Background
                  </button>
                  <button
                    onClick={() => toggleSection(`${member.id}-value`)}
                    className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
                  >
                    💡 Why This Matters
                  </button>
                </div>

                {/* Expandable Scientific Background */}
                <div className={`overflow-hidden transition-all duration-400 ${expandedSections[`${member.id}-scientific`] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="bg-dark-highlighted border-l-4 border-blue-500 p-8 rounded-r-lg">
                    <h4 className="text-xl font-semibold text-blue-500 mb-6">Scientific Credentials</h4>
                    
                    <div className="space-y-6">
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">🎓 Education & Training</h5>
                        <ul className="space-y-2 text-gray-300 pl-6">
                          {member.scientificBackground.education.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <span className="text-pink-primary mt-1">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">🔬 Research Background</h5>
                        <ul className="space-y-2 text-gray-300 pl-6">
                          {member.scientificBackground.research.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <span className="text-pink-primary mt-1">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">💼 Professional Experience</h5>
                        <ul className="space-y-2 text-gray-300 pl-6">
                          {member.scientificBackground.experience.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <span className="text-pink-primary mt-1">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">⚙️ Technical Expertise</h5>
                        <ul className="space-y-2 text-gray-300 pl-6">
                          {member.scientificBackground.technical.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <span className="text-pink-primary mt-1">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleSection(`${member.id}-scientific`)}
                      className="text-blue-500 text-sm font-medium mt-6 hover:underline transition-colors"
                    >
                      Collapse ↑
                    </button>
                  </div>
                </div>

                {/* Expandable Business Value */}
                <div className={`overflow-hidden transition-all duration-400 ${expandedSections[`${member.id}-value`] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="bg-dark-highlighted border-l-4 border-purple-500 p-8 rounded-r-lg">
                    <h4 className="text-xl font-semibold text-purple-500 mb-6">What This Means for Your Project</h4>
                    <ul className="space-y-3 text-gray-300">
                      {member.businessValue.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-pink-primary mt-1">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => toggleSection(`${member.id}-value`)}
                      className="text-purple-500 text-sm font-medium mt-6 hover:underline transition-colors"
                    >
                      Collapse ↑
                    </button>
                  </div>
                </div>

                {/* Personal Touch */}
                <div className="mt-10 pt-8 border-t border-dark-highlighted">
                  <h4 className="text-lg font-medium text-gray-300 mb-4">Beyond the Lab</h4>
                  <p className="text-gray-300 leading-relaxed">{member.personalBio}</p>
                </div>

                {/* Navigation */}
                <div className="text-center mt-12 text-sm text-gray-400">
                  {index > 0 && (
                    <button
                      onClick={() => scrollToSection(teamMembers[index - 1].id)}
                      className="hover:text-pink-primary transition-colors mr-4"
                    >
                      ← Previous Team Member
                    </button>
                  )}
                  <button
                    onClick={() => scrollToSection('top')}
                    className="hover:text-pink-primary transition-colors mx-2"
                  >
                    ↑ Back to Top
                  </button>
                  {index < teamMembers.length - 1 && (
                    <button
                      onClick={() => scrollToSection(teamMembers[index + 1].id)}
                      className="hover:text-pink-primary transition-colors ml-4"
                    >
                      Next Team Member →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
}

