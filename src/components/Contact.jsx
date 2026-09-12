import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY; 
    
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      setStatus('error');
      setErrorMessage('Form is not configured yet. Please add your Web3Forms access key in the source code or .env file.');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <section id="Contact" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Let's Work Together" 
          subtitle="I'm currently looking for software engineering opportunities. Feel free to reach out!"
        />
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 flex flex-col gap-6 fade-in-left">
            <div className="glass-card p-6 flex items-start gap-4 premium-hover">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email</h4>
                <a href="mailto:alammdhazrat743@gmail.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  alammdhazrat743@gmail.com
                </a>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-start gap-4 premium-hover">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Location</h4>
                <p className="text-lg font-medium text-foreground">
                  Noida, Uttar Pradesh
                </p>
                <p className="text-sm text-muted-foreground">
                  Open to Delhi NCR
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/Mdhazratalam" target="_blank" rel="noopener noreferrer" className="p-4 glass-card premium-hover flex-1 flex justify-center text-foreground hover:text-pink-500">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/md-hazrat-alam-growth/" target="_blank" rel="noopener noreferrer" className="p-4 glass-card premium-hover flex-1 flex justify-center text-foreground hover:text-blue-500">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3 glass-card p-8 md:p-10 fade-in-right" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                  placeholder="What would you like to discuss?"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground resize-none"
                  placeholder="Write your message..."
                />
              </div>
              
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-md text-sm">
                  Message sent successfully! I will get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-md text-sm">
                  {errorMessage}
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>Sending <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
