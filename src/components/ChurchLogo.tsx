
import React from 'react';

interface LogoProps {
  className?: string;
}

const ChurchLogo: React.FC<LogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      className={className} 
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path 
        d="M12 3L2 12h3v8h14v-8h3L12 3z" 
        className="text-church-purple" 
        fill="#513278"
      />
      <path 
        d="M12 7v11" 
        className="text-church-gold" 
        stroke="#D4AF37"
        strokeWidth="1.5"
      />
      <path 
        d="M8 15h8" 
        className="text-church-gold" 
        stroke="#D4AF37"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default ChurchLogo;
