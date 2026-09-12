import React from 'react';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{title}</h2>
      {subtitle && (
        <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4"></div>
      )}
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
