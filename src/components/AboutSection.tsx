
import React from 'react';

const AboutSection: React.FC = () => {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '15+', label: 'Competitions' },
    { value: '8', label: 'Team Members' },
    { value: '2', label: 'Regional Awards' }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase rounded bg-black text-white">
            About Us
          </div>
          <h2 className="text-4xl font-bold">The Dragon Brothers Legacy</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Founded with a passion for robotics and engineering excellence, our team embodies 
            innovation, resilience, and collaborative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-700 p-1 shadow-lg">
              <div className="bg-white rounded-md p-6 h-full">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  To inspire and develop young engineers through competitive robotics, 
                  fostering critical thinking, teamwork, and technical skills while preparing 
                  students for future careers in STEM fields.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="font-medium">Since 2020</span>
                  <span>•</span>
                  <span>High School Division</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-700 p-1 shadow-lg">
              <div className="bg-white rounded-md p-6 h-full">
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-gray-700">
                  We combine systematic engineering processes with creative problem-solving. 
                  Each robot design undergoes rigorous testing and iteration, ensuring peak 
                  performance under competition conditions while teaching valuable skills in 
                  mechanical design, programming, and strategic planning.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-6 shadow-md text-center border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Core Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 mr-2 mt-0.5 text-black" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span>Innovation & Creative Problem Solving</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 mr-2 mt-0.5 text-black" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span>Teamwork & Collaborative Excellence</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 mr-2 mt-0.5 text-black" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span>Analytical Thinking & Design Iteration</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 mr-2 mt-0.5 text-black" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span>Perseverance & Competitive Spirit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
