import React from 'react';
import SectionHeading from './SectionHeading';
import { Trophy, ExternalLink, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Winner — Cyber Safety Hackathon",
      organization: "IIT Bhubaneswar (State-Level)",
      proof: "https://drive.google.com/file/d/11497UCqDbCtWlS5csbG_Vz2Yj-_Tl9BS/view?usp=sharing"
    },
    {
      title: "Winner — Project Expo",
      organization: "TechUtsav 2025, Centurion University",
      proof: "https://drive.google.com/file/d/1Nh4_X9BZ44QfhsAEtVMDv9wT351zKwJe/view?usp=sharing"
    },
    {
      title: "3rd Winner — Hackathon",
      organization: "TechUtsav 2025, Centurion University",
      proof: "https://drive.google.com/file/d/18gx9irauU7Hsm5nI9jtNUEjxABxJP4cS/view?usp=drive_link"
    }
  ];

  return (
    <section id="Achievement" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Achievements" 
          subtitle="Recognitions and competitive programming successes."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className={`glass-card p-6 flex flex-col group premium-hover card-border-achievements ${['fly-2', 'fly-3', 'fly-1'][index % 3]}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  {index === 2 ? (
                    <Award size={28} className="text-primary" />
                  ) : (
                    <Trophy size={28} className="text-primary" />
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              
              <p className="text-muted-foreground mb-8">
                {achievement.organization}
              </p>
              
              <div className="mt-auto pt-4 border-t border-border">
                <a 
                  href={achievement.proof} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  View Proof <ExternalLink size={14} className="ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
