import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

const Slide: React.FC<SlideProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center animate-fade-in ${className}`}>
      {children}
    </div>
  );
};

export const SlideTitle: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-light-text animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{children}</h2>
};

export const SlideSubtitle: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return <p className="mt-4 text-lg md:text-xl text-medium-text max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>{children}</p>
}

export default Slide;
