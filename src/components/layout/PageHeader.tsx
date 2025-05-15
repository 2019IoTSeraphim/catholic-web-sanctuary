
import React from 'react';

type PageHeaderProps = {
  title: string;
  backgroundImage?: string;
  children?: React.ReactNode;
};

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  backgroundImage = "/src/assets/images/stained-glass.jpg", 
  children 
}) => {
  return (
    <div 
      className="relative bg-church-purple py-16 md:py-24"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-church-purple/70"></div>
      <div className="church-container relative z-10 text-white text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        {children && (
          <div className="max-w-2xl mx-auto text-lg text-white/90">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
