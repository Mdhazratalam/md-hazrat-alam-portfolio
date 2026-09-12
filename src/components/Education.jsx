import React from 'react';
import SectionHeading from './SectionHeading';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="Education" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Education" 
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-primary/30 pl-8 ml-4 md:ml-0 space-y-12">
            
            {/* Education Item */}
            <div className="relative slide-up">
              <span className="absolute -left-[41px] top-1 h-10 w-10 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" />
              </span>
              
              <div className="glass-card p-6 md:p-8 relative premium-hover card-border-education fade-in-left" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  B.Tech in Computer Science
                </h3>
                <h4 className="text-lg text-primary font-medium mb-4">
                  Centurion University of Technology and Management
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>September 2022 – April 2026</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    <span>Gajapati, Odisha</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border inline-block">
                  <span className="text-sm font-medium text-muted-foreground">CGPA: </span>
                  <span className="text-lg font-bold text-foreground">9/10</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
