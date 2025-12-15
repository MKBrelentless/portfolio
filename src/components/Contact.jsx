import React from 'react';

export default function Contact({ email, github, linkedin, phonenumber }) {
  return (
    <section id="contact" className="section-padding section-alt">
      <h2 className="section-title">Get In Touch</h2>
      <div style={{maxWidth: '600px', margin: '0 auto'}}>
        <div className="card" style={{padding: '3rem', textAlign: 'center'}}>
          <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: '#15400c', opacity: 0.8}}>
            I'm always open to discussing new opportunities and interesting projects. Let's connect!
          </p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px'}}>
              <span style={{fontSize: '1.5rem'}}>📧</span>
              <div>
                <span style={{fontWeight: '600', color: '#e87602', marginRight: '0.5rem'}}>Email:</span>
                <a href={`mailto:${email}`} style={{color: '#15400c', textDecoration: 'none', fontWeight: '500'}}>
                  {email}
                </a>
              </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px'}}>
              <span style={{fontSize: '1.5rem'}}>💬</span>
              <div>
                <span style={{fontWeight: '600', color: '#e87602', marginRight: '0.5rem'}}>WhatsApp:</span>
                <a href={`https://wa.me/254${phonenumber.substring(1)}`} target="_blank" rel="noopener noreferrer" style={{color: '#15400c', textDecoration: 'none', fontWeight: '500'}}>
                  {phonenumber}
                </a>
              </div>
            </div>
            
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px'}}>
              <span style={{fontSize: '1.5rem'}}>💻</span>
              <div>
                <span style={{fontWeight: '600', color: '#e87602', marginRight: '0.5rem'}}>GitHub:</span>
                <a href={github} target="_blank" rel="noopener noreferrer" style={{color: '#15400c', textDecoration: 'none', fontWeight: '500'}}>
                  View Profile
                </a>
              </div>
            </div>
            
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px'}}>
              <span style={{fontSize: '1.5rem'}}>💼</span>
              <div>
                <span style={{fontWeight: '600', color: '#e87602', marginRight: '0.5rem'}}>LinkedIn:</span>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{color: '#15400c', textDecoration: 'none', fontWeight: '500'}}>
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}