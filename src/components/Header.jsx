import React from 'react';

export default function Header({ name }) {
  return (
    <header className="sticky top-0 z-50 shadow-md" style={{backgroundColor: '#15400c'}}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{color: '#e87602'}}>{name}</h1>
          
          <nav>
            <ul className="flex gap-2">
              <li><a href="#hero" className="menu-item" style={{
                color: '#ffffff',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                fontSize: '1rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e87602';
                e.target.style.borderColor = '#e87602';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 15px rgba(232, 118, 2, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>Home</a></li>
              
              <li><a href="#about" className="menu-item" style={{
                color: '#ffffff',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                fontSize: '1rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e87602';
                e.target.style.borderColor = '#e87602';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 15px rgba(232, 118, 2, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>About</a></li>
              
              <li><a href="#services" className="menu-item" style={{
                color: '#ffffff',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                fontSize: '1rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e87602';
                e.target.style.borderColor = '#e87602';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 15px rgba(232, 118, 2, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>Skills</a></li>
              
              <li><a href="#projects" className="menu-item" style={{
                color: '#ffffff',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                fontSize: '1rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e87602';
                e.target.style.borderColor = '#e87602';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 15px rgba(232, 118, 2, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>Projects</a></li>
              
              <li><a href="#contact" className="menu-item" style={{
                color: '#ffffff',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                fontSize: '1rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e87602';
                e.target.style.borderColor = '#e87602';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 15px rgba(232, 118, 2, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}