import React from 'react';
import SectionHeading from './SectionHeading';
import { ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon as Github } from './SocialIcons';

const Projects = () => {
  const projects = [
    {
      name: "Civic Issue Management System",
      tech: "MERN Stack",
      image: "/civiceye.png",
      description: "Developed a MERN-based civic issue management platform allowing citizens to submit issues with descriptions, images, and locations.",
      features: [
        "JWT authentication & Role-based access",
        "Multiple user roles: Citizens, Departments, Administrators",
        "Department-wise and Admin dashboards",
        "Issue tracking and management",
        "Real-time chat functionality",
        "Communication between users and administrators"
      ],
      liveLink: "https://civic-issues-main-page.vercel.app/",
      githubLink: "https://github.com/Mdhazratalam/CIVIC-ISSUES"
    },
    {
      name: "AI-Powered Learning Management System",
      tech: "MERN + AI",
      image: "/lms.png",
      description: "Developed a MERN-based AI-powered Learning Management System with personalized learning features for students and instructors.",
      features: [
        "AI search capabilities",
        "Google authentication integration",
        "Dedicated Student and Instructor dashboards",
        "Comprehensive course management",
        "Interactive learning activities",
        "Razorpay Payment Gateway integration (TEST MODE)",
        "UPI QR-based payment functionality for course purchases"
      ],
      liveLink: "https://ai-powered-lms-1-sj4d.onrender.com/",
      githubLink: "https://github.com/Mdhazratalam/ai-powered-lms"
    }
  ];

  return (
    <section id="Projects" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Real-world applications I've built to solve complex problems."
        />
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className={`glass-card flex flex-col group premium-hover card-border-projects ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`} style={{ animationDelay: '0.2s' }}>
              
              {/* Project Image */}
              <div className="relative h-48 sm:h-64 bg-muted flex items-center justify-center overflow-hidden border-b border-border rounded-t-[calc(var(--radius))] group-hover:opacity-90 transition-opacity">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                  <span className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-xs font-bold rounded-full">
                    {project.tech}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-8 flex-1">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary mr-2 mt-0.5 shrink-0" />
                        <span>
                          {feature.includes("TEST MODE") ? (
                            <span dangerouslySetInnerHTML={{ __html: feature.replace("TEST MODE", "<strong class='text-destructive'>TEST MODE</strong>") }} />
                          ) : (
                            feature
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-border">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-6 py-2.5 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 border border-border transition-colors flex items-center justify-center gap-2"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
