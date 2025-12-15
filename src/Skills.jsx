import React from 'react';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section-padding">
      <h2 className="section-title">Skills</h2>
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center'}}>
          {skills && skills.length > 0 ? (
            skills.map((skill, idx) => (
              <span 
                key={idx} 
                style={{
                  background: 'linear-gradient(135deg, #e87602 0%, #ff8c1a 100%)',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 15px rgba(232, 118, 2, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(232, 118, 2, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(232, 118, 2, 0.3)';
                }}
              >
                {skill}
              </span>
            ))
          ) : (
            <p style={{color: '#15400c', textAlign: 'center'}}>No skills added yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}