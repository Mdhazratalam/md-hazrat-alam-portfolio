import React from 'react';
import SectionHeading from './SectionHeading';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="Experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Experience" 
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-primary/30 pl-8 ml-4 md:ml-0 space-y-12">
            
            {/* Experience Item */}
            <div className="relative slide-up">
              <span className="absolute -left-[41px] top-1 h-10 w-10 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <Briefcase size={20} className="text-primary" />
              </span>
              
              <div className="glass-card p-6 md:p-8 relative premium-hover card-border-experience fade-in-left" style={{ animationDelay: '0.2s' }}>
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
                  Internship
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  Full Stack Development Intern
                </h3>
                <h4 className="text-lg text-primary font-medium mb-4">
                  TechnoHacks Solutions Pvt. Ltd.
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>May 2025 – June 2025</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    <span>Remote</span>
                  </div>
                </div>
                
                <ul className="space-y-3 text-muted-foreground list-none ml-0">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>Built full-stack web applications using the MERN stack, focusing on real-world project implementation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>Developed authentication systems using JWT.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>Implemented CRUD APIs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>Optimized frontend performance.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>Collaborated with developers to enhance project functionality and improve user experience.</span>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
