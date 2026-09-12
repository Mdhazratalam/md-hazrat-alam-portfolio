import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';
import profilePic from '../assets/profilepic.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = "MD HAZRAT ALAM";
  
  useEffect(() => {
    let timeout;
    if (isDeleting) {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(fullName.substring(0, text.length - 1)), 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(false), 500);
      }
    } else {
      if (text.length < fullName.length) {
        timeout = setTimeout(() => setText(fullName.substring(0, text.length + 1)), 150);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2500);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <section id="Hero" className="min-h-screen flex items-center justify-center pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6 float-slow">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Open to Opportunities
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-white">
              Hi, I'm <br />
              <span className="text-gradient block mt-2 h-[1.2em] whitespace-nowrap">{text}<span className="animate-pulse">|</span></span>
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-6 font-medium text-blue-400 fade-in" style={{ animationDelay: '0.2s' }}>
              Full Stack Developer
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed fade-in" style={{ animationDelay: '0.3s' }}>
              Full Stack Developer specializing in MERN, building responsive web applications and REST APIs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 fade-in" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#Projects" 
                className="w-full sm:w-auto px-8 py-3 rounded-md text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center shadow-lg"
                style={{ backgroundImage: 'linear-gradient(to right, #ffa17f, #00223e)' }}
              >
                View Projects
              </a>
              <a 
                href="/Hazrat_Alam_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 rounded-md border border-border bg-card hover:bg-card/80 text-foreground font-medium transition-colors flex items-center justify-center"
              >
                Download Resume <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-5 fade-in" style={{ animationDelay: '0.5s' }}>
              <a href="https://github.com/Mdhazratalam" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pink-500 hover:scale-110 transition-all" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/md-hazrat-alam-growth/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-500 hover:scale-110 transition-all" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://leetcode.com/u/Md_Hazrat_Alam/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-yellow-500 hover:scale-110 transition-all" aria-label="LeetCode">
                <Code2 size={24} />
              </a>
              <a href="mailto:alammdhazrat743@gmail.com" className="text-muted-foreground hover:text-green-500 hover:scale-110 transition-all" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-2xl hover:border-blue-500/50 transition-colors duration-500">
              <img 
                src={profilePic} 
                alt="MD Hazrat Alam" 
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
