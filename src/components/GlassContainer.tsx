import React from 'react';
import './GlassContainer.css';

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
}

const GlassContainer: React.FC<GlassContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`glass-container ${className}`}>
      {children}
    </div>
  );
};

export default GlassContainer;
