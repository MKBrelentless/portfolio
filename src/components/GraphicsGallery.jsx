import React from 'react';
import { motion } from 'framer-motion';

export default function GraphicsGallery() {
  const images = [
    { src: "/Graphics/Presentation.png", label: "Premium Presentation" },
    { src: "/Graphics/prentation1.png", label: "Corporate Design" },
    { src: "/Graphics/LOGOV.png", label: "Vector Logo Design" },
    { src: "/Graphics/retechlogo.png", label: "ReTech Brand Identity" },
    { src: "/Graphics/repair.png", label: "Service Repair Flyer" },
    { src: "/Graphics/RG11.png", label: "RG11 Graphic" },
    { src: "/Graphics/RG10.png", label: "RG10 Graphic" },
    { src: "/Graphics/RG9.png", label: "RG9 Graphic" },
    { src: "/Graphics/RG8.png", label: "RG8 Graphic" },
    { src: "/Graphics/RG4.png", label: "RG4 Graphic" },
    { src: "/Graphics/rg41.png", label: "RG41 Rendering" },
    { src: "/Graphics/RG3.png", label: "RG3 Layout" },
    { src: "/Graphics/RG1.png", label: "RG1 Poster" },
    { src: "/Graphics/focus.png", label: "Focus Composition" },
    { src: "/Graphics/edger.png", label: "Edger Concept" },
    { src: "/Graphics/MateDavies (2).png", label: "Mate Davies Project" },
    { src: "/Graphics/profile.png", label: "Profile Portrait Design" },
    { src: "/Graphics/R20.jpg", label: "R20 Visual" },
    { src: "/Graphics/R14.jpg", label: "R14 Draft" }
  ];

  return (
    <section id="graphics" className="section-padding section-alt" style={{backgroundColor: '#f1f3f5'}}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Graphic Design Portfolio
      </motion.h2>
      <p style={{textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#15400c', opacity: 0.8}}>
        A comprehensive collection of my latest flyers, logos, and digital branding materials.
      </p>
      
      <div className="max-w-7xl mx-auto px-4">
        <div style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2.5rem'
        }}>
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (idx % 3) * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 15px 40px rgba(232, 118, 2, 0.15)' }}
              className="card"
              style={{ overflow: 'hidden', padding: 0 }}
            >
              <div 
                style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '350px' // Makes sure standard sized tall posters are accommodated vividly
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.label} 
                  loading="lazy"
                  style={{ 
                    width: '100%', 
                    height: '350px', 
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.2rem', textAlign: 'center', borderTop: '2px solid rgba(232, 118, 2, 0.05)' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#15400c', fontWeight: '700' }}>
                  {img.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
