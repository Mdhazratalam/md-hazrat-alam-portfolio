import React from 'react';
import SectionHeading from './SectionHeading';
import { ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';

const CodingProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      description: "My open-source projects and contributions.",
      icon: <Github size={32} className="text-foreground" />,
      link: "https://github.com/Mdhazratalam"
    },
    {
      name: "LinkedIn",
      description: "My professional network and experience.",
      icon: <Linkedin size={32} className="text-[#0A66C2]" />,
      link: "https://www.linkedin.com/in/md-hazrat-alam-growth/"
    },
    {
      name: "LeetCode",
      description: "Data Structures and Algorithms practice.",
      icon: <Code2 size={32} className="text-[#FFA116]" />,
      link: "https://leetcode.com/u/Md_Hazrat_Alam/"
    },
    {
      name: "GeeksforGeeks",
      description: "Competitive programming and problem solving.",
      icon: <div className="w-8 h-8 rounded-full bg-[#2F8D46] flex items-center justify-center text-white font-bold text-xs">GFG</div>,
      link: "https://www.geeksforgeeks.org/profile/mdhazratalam?tab=activity"
    }
  ];

  return (
    <section id="Coding-profiles" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Coding Profiles" 
          subtitle="Where I code, share, and connect."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <div key={index} className={`glass-card p-6 flex flex-col items-center text-center group premium-hover card-border-profiles ${['fly-3', 'fly-1', 'fly-2', 'fly-1'][index % 4]}`}>
              <div className="mb-4 p-4 rounded-2xl bg-background/50 border border-border/50 group-hover:scale-110 transition-transform duration-300">
                {profile.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {profile.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-6">
                {profile.description}
              </p>
              
              <a 
                href={profile.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                View Profile <ExternalLink size={14} className="ml-1.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
