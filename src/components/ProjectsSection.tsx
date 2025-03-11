
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  achievements: string[];
  features: string[];
  image: string;
}

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Dragon-X1",
      year: "2023-2024",
      description: "Our flagship competition robot designed for the VEX Robotics Competition. Features a pneumatic lift system and precision intake mechanism.",
      achievements: [
        "Regional Finalist - Northern Tournament",
        "Excellence Award - State Qualifiers",
        "Design Award - Spring Invitational"
      ],
      features: [
        "4-motor drive train with custom gearing",
        "Pneumatic elevation system with 24\" reach",
        "Autonomous routines with sensor integration",
        "Precision control systems"
      ],
      image: "https://placehold.co/600x400/333333/FFFFFF/png?text=Dragon-X1"
    },
    {
      id: 2,
      title: "Vector Prime",
      year: "2022-2023",
      description: "A versatile robot designed with a focus on speed and maneuverability. Incorporates advanced sensor arrays for precision navigation.",
      achievements: [
        "Innovation Award - Regional Championship",
        "Semi-finalist - State Competition"
      ],
      features: [
        "Holonomic drive system",
        "Advanced PID control loops",
        "Custom sensor integration",
        "Rapid-deploy mechanism"
      ],
      image: "https://placehold.co/600x400/333333/FFFFFF/png?text=Vector+Prime"
    },
    {
      id: 3,
      title: "Nexus Prototype",
      year: "2021-2022",
      description: "Our first competition-grade robot featuring an innovative scoring mechanism and robust chassis design.",
      achievements: [
        "Rookie Award - Regional Qualifier",
        "Skills Challenge Champion"
      ],
      features: [
        "Tank drive with high torque motors",
        "Extendable arm mechanism",
        "Custom control interface",
        "Optimized weight distribution"
      ],
      image: "https://placehold.co/600x400/333333/FFFFFF/png?text=Nexus+Prototype"
    }
  ];

  return (
    <section id="projects" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase rounded bg-black text-white">
            Our Projects
          </div>
          <h2 className="text-4xl font-bold">Engineering Excellence</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore our competition robots and the technical innovations that drive our success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={cn(
                "p-6 rounded-lg text-left transition-all duration-300 border",
                index === activeProject
                  ? "bg-black text-white border-black"
                  : "bg-white hover:bg-gray-50 border-gray-200"
              )}
              onClick={() => setActiveProject(index)}
            >
              <div className="text-sm font-medium mb-2">
                {project.year}
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className={cn(
                "text-sm line-clamp-2",
                index === activeProject ? "text-gray-300" : "text-gray-600"
              )}>
                {project.description}
              </p>
            </button>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-5 min-h-[400px]">
            <div className="md:col-span-2 bg-gray-100">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:col-span-3 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{projects[activeProject].title}</h3>
                <p className="text-gray-600 mb-4">{projects[activeProject].description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {projects[activeProject].features.map((feature, i) => (
                    <li key={i} className="flex items-start">
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Achievements</h4>
                <ul className="space-y-2">
                  {projects[activeProject].achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
