
import React from 'react';
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
  const project: Project = {
    id: 1,
    title: "Trogdor",
    year: "2023-2024",
    description: "Our flagship competition robot designed for the VEX Robotics Competition, featuring advanced mecanum drive system and high-stakes scoring capabilities.",
    achievements: [
      "Event Champion - Ladue Tournament",
      "Quarter Finalist - State Championship"
    ],
    features: [
      "4-motor mecanum drivetrain with strafing capabilities",
      "Autonomous routines with PID and slew control",
      "Fishmech high stakes mechanism",
      "Precision control systems"
    ],
    image: "https://placehold.co/600x400/333333/FFFFFF/png?text=Trogdor"
  };

  return (
    <section id="projects" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase rounded bg-black text-white">
            Our Project
          </div>
          <h2 className="text-4xl font-bold">Engineering Excellence</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore our competition robot and the technical innovations that drive our success.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-5 min-h-[400px]">
            <div className="md:col-span-2 bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:col-span-3 p-8">
              <div className="mb-6">
                <div className="text-sm font-medium mb-2">
                  {project.year}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
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
                  {project.achievements.map((achievement, i) => (
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
