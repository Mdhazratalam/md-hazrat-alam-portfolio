import React from 'react';
import SectionHeading from './SectionHeading';
import { Code2, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={24} className="text-primary" />,
      skills: ["Java", "JavaScript"]
    },
    {
      title: "Frontend",
      icon: <Layout size={24} className="text-primary" />,
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      icon: <Server size={24} className="text-primary" />,
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Databases",
      icon: <Database size={24} className="text-primary" />,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} className="text-primary" />,
      skills: ["Git", "GitHub", "Postman", "Cloudinary"]
    }
  ];

  return (
    <section id="Skills" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Technologies and tools I use to build scalable applications."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto slide-up">
          {skillCategories.map((category, index) => (
            <div key={index} className={`glass-card p-6 flex flex-col h-full premium-hover card-border-skills ${['fly-1', 'fly-2', 'fly-3'][index % 3]}`}>
              <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Quick fix for missing Layout icon import
import { Layout } from 'lucide-react';

export default Skills;
