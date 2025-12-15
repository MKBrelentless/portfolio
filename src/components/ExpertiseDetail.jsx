import React from 'react';

export default function ExpertiseDetail({ expertise, onClose }) {
  if (!expertise) return null;

  // Check if this is the Graphic Designer section
  const isGraphicDesign = expertise.title === "Graphic Designer";

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
        maxWidth: isGraphicDesign ? '900px' : '700px',
        width: '100%',
        maxHeight: '80vh',
        overflow: 'auto',
        padding: '2.5rem',
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
          <h2 style={{fontSize: '2.2rem', fontWeight: '700', color: '#15400c', marginBottom: '1rem'}}>
            {expertise.title}
          </h2>
          <p style={{fontSize: '1.1rem', color: '#15400c', opacity: 0.8, lineHeight: '1.6'}}>
            {expertise.description}
          </p>
        </div>

        <div style={{marginBottom: '2rem'}}>
          <h3 style={{fontSize: '1.4rem', fontWeight: '600', color: '#e87602', marginBottom: '1rem'}}>
            My Works & Projects
          </h3>
          
          {isGraphicDesign ? (
            <div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>
                {/* Design Sample Images from Graphics folder */}
                <div style={{textAlign: 'center'}}>
                  <img 
                    src="/Graphics/RG1.png" 
                    alt="RG1 Design Sample"
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '2px solid #e87602',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => window.open('/Graphics/RG1.png', '_blank')}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 8px 25px rgba(232, 118, 2, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{display: 'none', padding: '2rem', background: '#f8f9fa', borderRadius: '8px', border: '2px solid #e87602'}}>
                    <span style={{color: '#e87602', fontWeight: '600'}}>RG1 Design</span>
                  </div>
                  <p style={{fontSize: '0.9rem', color: '#15400c', marginTop: '0.5rem', fontWeight: '500'}}>RG1 Design</p>
                </div>

                <div style={{textAlign: 'center'}}>
                  <img 
                    src="/Graphics/RG3.png" 
                    alt="RG3 Design Sample"
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '2px solid #e87602',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => window.open('/Graphics/RG3.png', '_blank')}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 8px 25px rgba(232, 118, 2, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{display: 'none', padding: '2rem', background: '#f8f9fa', borderRadius: '8px', border: '2px solid #e87602'}}>
                    <span style={{color: '#e87602', fontWeight: '600'}}>RG3 Design</span>
                  </div>
                  <p style={{fontSize: '0.9rem', color: '#15400c', marginTop: '0.5rem', fontWeight: '500'}}>RG3 Design</p>
                </div>

                <div style={{textAlign: 'center'}}>
                  <img 
                    src="/Graphics/RG4.png" 
                    alt="RG4 Design Sample"
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '2px solid #e87602',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => window.open('/Graphics/RG4.png', '_blank')}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 8px 25px rgba(232, 118, 2, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{display: 'none', padding: '2rem', background: '#f8f9fa', borderRadius: '8px', border: '2px solid #e87602'}}>
                    <span style={{color: '#e87602', fontWeight: '600'}}>RG4 Design</span>
                  </div>
                  <p style={{fontSize: '0.9rem', color: '#15400c', marginTop: '0.5rem', fontWeight: '500'}}>RG4 Design</p>
                </div>

                <div style={{textAlign: 'center'}}>
                  <img 
                    src="/Graphics/rg41.png" 
                    alt="RG41 Design Sample"
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '2px solid #e87602',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => window.open('/Graphics/rg41.png', '_blank')}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 8px 25px rgba(232, 118, 2, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{display: 'none', padding: '2rem', background: '#f8f9fa', borderRadius: '8px', border: '2px solid #e87602'}}>
                    <span style={{color: '#e87602', fontWeight: '600'}}>RG41 Design</span>
                  </div>
                  <p style={{fontSize: '0.9rem', color: '#15400c', marginTop: '0.5rem', fontWeight: '500'}}>RG41 Design</p>
                </div>

                <div style={{textAlign: 'center'}}>
                  <img 
                    src="/Graphics/R20.jpg" 
                    alt="R20 Design Sample"
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '2px solid #e87602',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => window.open('/Graphics/R20.jpg', '_blank')}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 8px 25px rgba(232, 118, 2, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{display: 'none', padding: '2rem', background: '#f8f9fa', borderRadius: '8px', border: '2px solid #e87602'}}>
                    <span style={{color: '#e87602', fontWeight: '600'}}>R20 Design</span>
                  </div>
                  <p style={{fontSize: '0.9rem', color: '#15400c', marginTop: '0.5rem', fontWeight: '500'}}>R20 Design</p>
                </div>
              </div>
              
              <ul style={{listStyle: 'none', padding: 0}}>
                {expertise.works.map((work, idx) => (
                  <li key={idx} style={{
                    padding: '1rem',
                    marginBottom: '0.75rem',
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    borderLeft: '4px solid #e87602',
                    fontSize: '1rem'
                  }}>
                    {work}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul style={{listStyle: 'none', padding: 0}}>
              {expertise.works.map((work, idx) => (
                <li key={idx} style={{
                  padding: '1rem',
                  marginBottom: '0.75rem',
                  background: '#f8f9fa',
                  borderRadius: '8px',
                  borderLeft: '4px solid #e87602',
                  fontSize: '1rem'
                }}>
                  {work}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 style={{fontSize: '1.4rem', fontWeight: '600', color: '#e87602', marginBottom: '1rem'}}>
            Technologies & Tools
          </h3>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
            {expertise.technologies.map((tech, idx) => (
              <span 
                key={idx}
                style={{
                  background: 'linear-gradient(135deg, #e87602 0%, #ff8c1a 100%)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}