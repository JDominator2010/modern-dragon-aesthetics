
import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "Team Captain & Lead Engineer",
      bio: "Four-year robotics veteran specializing in mechanical design and strategic planning. Aspiring aerospace engineer.",
      image: "https://placehold.co/300x300/333333/FFFFFF/png?text=AJ"
    },
    {
      name: "Sam Rivera",
      role: "Lead Programmer",
      bio: "Responsible for robot control systems and autonomous routines. Passionate about AI and machine learning.",
      image: "https://placehold.co/300x300/333333/FFFFFF/png?text=SR"
    },
    {
      name: "Taylor Chen",
      role: "Design Specialist",
      bio: "Focuses on CAD design and structural integrity. Combines artistic vision with technical precision.",
      image: "https://placehold.co/300x300/333333/FFFFFF/png?text=TC"
    },
    {
      name: "Jordan Smith",
      role: "Fabrication Lead",
      bio: "Expert in translating designs into physical components. Skilled in various fabrication techniques.",
      image: "https://placehold.co/300x300/333333/FFFFFF/png?text=JS"
    },
    {
      name: "Riley Patel",
      role: "Strategy & Analytics",
      bio: "Analyzes competition patterns and optimizes robot performance. Data-driven approach to robotics.",
      image: "https://placehold.co/300x300/333333/FFFFFF/png?text=RP"
    },
    {
      name: "Quinn Williams",
      role: "Electronics Specialist",
      bio: "Manages sensor integration and power systems. Creating reliable electrical systems for optimal performance.",
      image: "https://placehold.co/300x300/333333/FFFFFF/png?text=QW"
    },
    {
      name: "Casey Miller",
      role: "Outreach Coordinator",
      bio: "Handles team promotion and community engagement. Passionate about inspiring future engineers.",
      image: "https://placehold.co/300x300/333333/FFFFFF/png?text=CM"
    },
    {
      name: "Dr. Lee Parker",
      role: "Faculty Advisor",
      bio: "Engineering teacher with background in industrial robotics. Provides technical guidance and mentorship.",
      image: "https://placehold.co/300x300/333333/FFFFFF/png?text=LP"
    }
  ];

  return (
    <section id="team" className="section-padding bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase rounded bg-black text-white">
            Our Team
          </div>
          <h2 className="text-4xl font-bold">Meet The Dragon Brothers</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Our diverse team brings together specialized skills, creative problem-solving, 
            and a shared passion for robotics excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <div className="text-sm font-medium text-gray-600 mb-3">{member.role}</div>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
