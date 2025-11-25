import React from 'react';

interface LogoProps {
  className?: string;
  classNameText?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "", classNameText = "" }) => {
  return (
    <div className={`font-black tracking-tighter uppercase leading-none select-none flex items-center font-sans ${className}`}>
      <span className={`text-[inherit] ${classNameText}`}>WAFFLES & CO</span>
    </div>
  );
};

export default Logo;