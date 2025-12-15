import React from 'react';

export default function RetechModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '2rem'
    }}>
      <div className="card" style={{
        maxWidth: '700px',
        width: '100%',
        maxHeight: '80vh',
        overflow: 'auto',
        padding: '3rem',
        position: 'relative'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: '#e87602',
            border: 'none',
            fontSize: '2rem',
            color: '#ffffff',
            cursor: 'pointer',
            fontWeight: 'bold',
            zIndex: 1001,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(232, 118, 2, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#15400c';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#e87602';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ×
        </button>
        
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem'}}>
            <img 
              src="/retech logo.png" 
              alt="Relentless Technologies Logo"
              style={{
                height: '60px',
                width: 'auto'
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
              fontSize: '1.5rem'
            }}>
              ReTech
            </span>
          </div>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#15400c', marginBottom: '0.5rem'}}>
            Relentless Technologies Ltd
          </h2>
          <p style={{fontSize: '1.2rem', color: '#e87602', fontWeight: '600', marginBottom: '2rem'}}>
            Graphics & IT Support Firm
          </p>
        </div>

        <div style={{marginBottom: '2rem'}}>
          <h3 style={{fontSize: '1.4rem', fontWeight: '600', color: '#e87602', marginBottom: '1rem'}}>
            About Our Company
          </h3>
          <p style={{fontSize: '1.1rem', color: '#15400c', opacity: 0.9, lineHeight: '1.6', marginBottom: '1.5rem'}}>
            ReTech is currently a Graphics & IT support firm specializing in comprehensive technology solutions 
            for businesses and individuals. We combine creative design expertise with technical proficiency to 
            deliver exceptional results.
          </p>
        </div>

        <div style={{marginBottom: '2rem'}}>
          <h3 style={{fontSize: '1.4rem', fontWeight: '600', color: '#e87602', marginBottom: '1rem'}}>
            Our Services
          </h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li style={{
              padding: '1rem',
              marginBottom: '0.75rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              borderLeft: '4px solid #e87602',
              fontSize: '1rem'
            }}>
              <strong>Network Equipment Sales</strong> - Ethernet cables, routers, switches, and networking accessories
            </li>
            <li style={{
              padding: '1rem',
              marginBottom: '0.75rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              borderLeft: '4px solid #e87602',
              fontSize: '1rem'
            }}>
              <strong>Software Installation</strong> - Professional software setup and configuration services
            </li>
            <li style={{
              padding: '1rem',
              marginBottom: '0.75rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              borderLeft: '4px solid #e87602',
              fontSize: '1rem'
            }}>
              <strong>Hardware Troubleshooting</strong> - Computer repair and hardware diagnostic services
            </li>
            <li style={{
              padding: '1rem',
              marginBottom: '0.75rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              borderLeft: '4px solid #e87602',
              fontSize: '1rem'
            }}>
              <strong>Website Creation & Maintenance</strong> - Custom website development and ongoing support
            </li>
            <li style={{
              padding: '1rem',
              marginBottom: '0.75rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              borderLeft: '4px solid #e87602',
              fontSize: '1rem'
            }}>
              <strong>Graphics Design</strong> - Logo design, marketing materials, and visual branding solutions
            </li>
          </ul>
        </div>

        <div style={{textAlign: 'center', marginTop: '2rem'}}>
          <p style={{fontSize: '1rem', color: '#15400c', opacity: 0.8, marginBottom: '1rem'}}>
            Ready to work with us? Get in touch today!
          </p>
          <a href="#contact" className="btn-primary" onClick={onClose}>
            Contact ReTech
          </a>
        </div>
      </div>
    </div>
  );
}