import React from 'react';
import SectionHeading from './SectionHeading';
import { Terminal, Database, Code, Layout } from 'lucide-react';

const About = () => {
  return (
    <section id="AboutMe" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="A brief introduction to who I am and what I do." 
        />
        
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 zoom-in">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I’m a Full-Stack Developer specializing in the MERN stack, with hands-on experience building responsive web applications and REST APIs.
            </p>
            <p>
              I enjoy turning ideas into functional, user-focused applications, working across both frontend and backend development. My experience includes building authentication systems, role-based access control, CRUD APIs, dashboards, and real-world full-stack features.
            </p>
            <p>
              I’ve built and deployed projects such as a Civic Issue Management System and an AI-Powered Learning Management System, giving me practical experience in developing applications from frontend interfaces to backend APIs and database integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
