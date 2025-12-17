import React, { useState } from 'react';
import ExpertiseDetail from './ExpertiseDetail';
import RetechModal from './RetechModal';
import { expertiseAreas } from '../data/expertiseAreas';

export default function Hero({ name, github }) {
  const [selectedExpertise, setSelectedExpertise] = useState(null);
  const [showRetechModal, setShowRetechModal] = useState(false);

  const handleExpertiseClick = (expertise) => {
    setSelectedExpertise(expertise);
  };

  const handleCloseDetail = () => {
    setSelectedExpertise(null);
  };

  const handleRetechModalOpen = () => {
    setShowRetechModal(true);
  };

  const handleRetechModalClose = () => {
    setShowRetechModal(false);
  };

  return (
    <>
      <section id="hero" style={{background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', minHeight: '85vh', padding: '2rem'}}>
        
        {/* Profile Section - Top Left */}
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center'}}>
          <img 
            src="/ReTech Founder.JPG" 
            alt="Austine Mukabwa - Founder of Relentless Technologies"
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center top',
              border: '3px solid #e87602',
              boxShadow: '0 4px 20px rgba(232, 118, 2, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => window.open('/ReTech Founder.JPG', '_blank')}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 30px rgba(232, 118, 2, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 20px rgba(232, 118, 2, 0.3)';
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback if image doesn't load */}
          <div style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e87602 0%, #ff8c1a 100%)',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3.5rem',
            color: '#ffffff',
            boxShadow: '0 4px 20px rgba(232, 118, 2, 0.3)',
            cursor: 'pointer'
          }}>
            AM
          </div>
          
          <div>
            <h1 style={{fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '800', color: '#15400c', marginBottom: '0.5rem', lineHeight: '1.1', textAlign: 'center'}}>
              {name}
            </h1>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem'}}>
              <img 
                src="/retech logo.png" 
                alt="Relentless Technologies Logo"
                style={{
                  height: '80px',
                  width: 'auto',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => window.open('/retech logo.png', '_blank')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.filter = 'brightness(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.filter = 'brightness(1)';
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline-block';
                }}
              />
              <span style={{
                display: 'none',
                background: 'linear-gradient(135deg, #15400c 0%, #1a4d0f 100%)',
                color: '#e87602',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}>
                ReTech
              </span>
              <span style={{fontSize: '1.1rem', color: '#e87602', fontWeight: '700'}}>
                Founder & CEO, Relentless Technologies
              </span>
            </div>
            <button 
              onClick={handleRetechModalOpen}
              className="btn-primary"
              style={{
                fontSize: '0.9rem',
                padding: '0.75rem 1.5rem',
                marginTop: '1rem',
                background: 'linear-gradient(135deg, #15400c 0%, #1a4d0f 100%)',
                border: 'none'
              }}
            >
              About ReTech Ltd
            </button>
          </div>
        </div>

        {/* Main Content - Centered */}
        <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '0 1rem'}}>
          <h2 style={{fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', color: '#e87602', fontWeight: '700', marginBottom: '2rem'}}>
            Areas of Expertise
          </h2>
          
          <div style={{marginBottom: '3rem', display: 'grid', gap: '1rem'}}>
            {expertiseAreas.map((expertise, idx) => (
              <div 
                key={expertise.id}
                onClick={() => handleExpertiseClick(expertise)}
                style={{
                  fontSize: '1.3rem',
                  color: '#15400c',
                  fontWeight: '600',
                  padding: '1rem 2rem',
                  background: 'rgba(232, 118, 2, 0.1)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(232, 118, 2, 0.2)';
                  e.target.style.borderColor = '#e87602';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(232, 118, 2, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(232, 118, 2, 0.1)';
                  e.target.style.borderColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <strong>{idx + 1}. {expertise.title}</strong>
                <span style={{fontSize: '1rem', color: '#e87602', marginLeft: '1rem', float: 'right'}}>→ Click for details</span>
              </div>
            ))}
          </div>
          
          <p style={{fontSize: '1.2rem', color: '#15400c', opacity: 0.8, marginBottom: '3rem', lineHeight: '1.6'}}>
            Passionate about creating innovative web applications and integrating AI solutions to solve real-world problems
          </p>
          
          <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="#projects" className="btn-primary" style={{fontSize: '1.1rem', padding: '1rem 2rem'}}>
              View My Work
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{background: 'transparent', color: '#e87602', border: '2px solid #e87602', fontSize: '1.1rem', padding: '1rem 2rem'}}>
              GitHub Profile
            </a>
            <a href="#contact" className="btn-primary" style={{background: '#15400c', color: '#ffffff', fontSize: '1.1rem', padding: '1rem 2rem'}}>
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {selectedExpertise && (
        <ExpertiseDetail 
          expertise={selectedExpertise} 
          onClose={handleCloseDetail}
        />
      )}

      <RetechModal 
        isOpen={showRetechModal}
        onClose={handleRetechModalClose}
      />
    </>
  );
}