
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
      name: "Jackson Norber",
      role: "Lead Programmer & Co-Captain",
      bio: "Responsible for robot control systems and strategic planning. Passionate about coding and robotics engineering.",
      image: "https://placehold.co/300x300/333333/FFFFFF/png?text=JN"
    },
    {
      name: "Bobby Seiter",
      role: "Main Driver & Co-Captain",
      bio: "Expert in robot operation and competition strategy. Skilled at navigating high-pressure competitive environments.",
      image: "https://placehold.co/300x300/333333/FFFFFF/png?text=BS"
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
            A powerful duo bringing together specialized skills, tactical operation,
            and shared passion for robotics excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
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
