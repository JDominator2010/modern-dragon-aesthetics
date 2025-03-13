
import React from 'react';
import { cn } from '@/lib/utils';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would be where form submission logic would go
    console.log("Form submitted");
    // Show success message or redirect
  };

  return (
    <section id="contact" className="section-padding px-2">
      <div className="max-w-6xl mx-auto"> 
        <div className="space-y-4 text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase rounded bg-black text-white">
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold">Connect With Us</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Interested in learning more about our team, sponsoring us, or joining our efforts? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="items-start">
          <div>
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-gray-100 rounded-md">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Coach Email</h4>
                    <a href="mailto:kedwards@northwestschools.net" className="text-gray-700 hover:text-black transition-colors">
                    kedwards@northwestschools.net
                    </a>                    
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-gray-100 rounded-md">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Jackson's Email</h4>
                    <a href="mailto:jackson@thedragonbrothers.tech" className="text-gray-700 hover:text-black transition-colors">
                    jackson@thedragonbrothers.tech
                    </a>            
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-gray-100 rounded-md">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Bobby's Email</h4>
                    <a href="mailto:bobby@thedragonbrothers.tech" className="text-gray-700 hover:text-black transition-colors">
                    bobby@thedragonbrothers.tech
                    </a>                    
                  </div>
                </div>

              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/northwest_high_school_robotics/" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors" target="_blank">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/p/Northwest-High-School-Robotics-61572715408531/" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors" target="_blank">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ContactSection;
