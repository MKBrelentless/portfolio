import React, { useState } from 'react';

export default function Header({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{backgroundColor: '#15400c'}}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 style={{fontSize: 'clamp(1.2rem, 4vw, 2rem)', fontWeight: 'bold', color: '#e87602'}}>{name}</h1>
          
          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-2">
              <li><a href="#hero" style={{color: '#ffffff', fontWeight: '600', fontSize: '0.9rem', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#e87602';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent';}}>Home</a></li>
              <li><a href="#about" style={{color: '#ffffff', fontWeight: '600', fontSize: '0.9rem', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#e87602';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent';}}>About</a></li>
              <li><a href="#services" style={{color: '#ffffff', fontWeight: '600', fontSize: '0.9rem', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#e87602';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent';}}>Skills</a></li>
              <li><a href="#projects" style={{color: '#ffffff', fontWeight: '600', fontSize: '0.9rem', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#e87602';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent';}}>Projects</a></li>
              <li><a href="#contact" style={{color: '#ffffff', fontWeight: '600', fontSize: '0.9rem', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#e87602';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent';}}>Contact</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{color: '#e87602', fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer'}}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col gap-2">
              <li><a href="#hero" style={{color: '#ffffff', fontWeight: '600', padding: '0.75rem', display: 'block', borderRadius: '8px', textDecoration: 'none'}} onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="#about" style={{color: '#ffffff', fontWeight: '600', padding: '0.75rem', display: 'block', borderRadius: '8px', textDecoration: 'none'}} onClick={() => setIsOpen(false)}>About</a></li>
              <li><a href="#services" style={{color: '#ffffff', fontWeight: '600', padding: '0.75rem', display: 'block', borderRadius: '8px', textDecoration: 'none'}} onClick={() => setIsOpen(false)}>Skills</a></li>
              <li><a href="#projects" style={{color: '#ffffff', fontWeight: '600', padding: '0.75rem', display: 'block', borderRadius: '8px', textDecoration: 'none'}} onClick={() => setIsOpen(false)}>Projects</a></li>
              <li><a href="#contact" style={{color: '#ffffff', fontWeight: '600', padding: '0.75rem', display: 'block', borderRadius: '8px', textDecoration: 'none'}} onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}