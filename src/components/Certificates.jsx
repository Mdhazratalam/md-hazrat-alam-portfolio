import React from 'react';
import SectionHeading from './SectionHeading';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  return (
    <section id="Certificate" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Certificates" 
          subtitle="Professional training and certifications."
        />
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 slide-up group premium-hover card-border-achievements">
            
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <Award size={40} className="text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Data Structures Training Certificate
              </h3>
              <p className="text-lg text-primary font-medium mb-1">
                GeeksforGeeks
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                16 weeks CUTM Program
              </p>
              
              <a 
                href="https://media.geeksforgeeks.org/courses/certificates/a998fa19413eb7041f7a554479df1847.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-6 py-2.5 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 border border-border transition-colors items-center justify-center gap-2"
              >
                View Certificate <ExternalLink size={16} />
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
