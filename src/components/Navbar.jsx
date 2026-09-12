import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#AboutMe' },
    { name: 'Education', href: '#Education' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Experience', href: '#Experience' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Achievements', href: '#Achievement' },
    { name: 'Certificates', href: '#Certificate' },
    { name: 'Profiles', href: '#Coding-profiles' },
    { name: 'Contact', href: '#Contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 border-gradient-navbar' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-wider text-foreground">
          HAZRAT<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="/Hazrat_Alam_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-foreground" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-nav border-t border-border flex flex-col px-4 py-6 shadow-xl slide-up">
          <ul className="flex flex-col space-y-4 mb-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={closeMenu}
                  className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="/Hazrat_Alam_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-center px-4 py-3 font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
