
import React from 'react';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-4 px-3 py-1 bg-black text-white text-xs font-medium tracking-widest uppercase rounded">
            VEX Robotics Team 95872B
          </div>
          
          <h1 className="mb-6 animate-slide-up">
            <span className="block text-5xl md:text-7xl font-bold tracking-tight mb-2">
              Dragon Brothers
            </span>
            <span className="text-lg md:text-xl font-light tracking-wider text-gray-700">
              Engineering Excellence • Competitive Spirit
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-8 animate-slide-up [animation-delay:200ms]">
            We design, build, and program competitive robots, pushing the boundaries of 
            high school engineering while developing real-world skills through teamwork and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-slide-up [animation-delay:400ms]">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-black text-white rounded-md font-medium hover:bg-black/80 transition-all"
            >
              Our Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white border border-black text-black rounded-md font-medium hover:bg-gray-100 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Fixed positioning for scroll down arrow to center it properly on all devices */}
        <div className="absolute left-0 right-0 bottom-10 mx-auto flex justify-center animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 5L12 19M12 19L19 12M12 19L5 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
