import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume', href: '/resume.pdf' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">Portfolio<span>.</span></a>
        
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="nav-item"
                target={link.name === 'Resume' ? '_blank' : undefined}
                rel={link.name === 'Resume' ? 'noopener noreferrer' : undefined}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="navbar-cta">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
