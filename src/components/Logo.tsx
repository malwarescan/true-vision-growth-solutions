import React from 'react';
interface LogoProps {
  className?: string;
}
export const Logo: React.FC<LogoProps> = ({
  className = ''
}) => {
  return <img src="/true_vision_logo.png" alt="True Vision Growth Solutions Inc. Logo" className={className} />;
};