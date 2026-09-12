import React from 'react';
import { Code2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-gradient-footer bg-card py-8 mt-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-foreground mb-1">MD Hazrat Alam</p>
          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/Mdhazratalam" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/md-hazrat-alam-growth/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://leetcode.com/u/Md_Hazrat_Alam/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LeetCode">
            <Code2 size={20} />
          </a>
          <a href="mailto:alammdhazrat743@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
            Email
          </a>
        </div>
        
        <div className="text-sm text-muted-foreground text-center md:text-right">
          &copy; {currentYear} Md Hazrat Alam. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
