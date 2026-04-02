import React from 'react';
import { motion } from 'framer-motion';

export default function ExpertiseDetail({ expertise, onClose }) {
  if (!expertise) return null;

  // Check if this is the Graphic Designer section
  const isGraphicDesign = expertise.title === "Graphic Designer";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
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
        padding: '2rem',
        backdropFilter: 'blur(5px)'
      }}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="card" 
        style={{
          maxWidth: isGraphicDesign ? '900px' : '700px',
          width: '100%',
          maxHeight: '85vh',
          overflow: 'auto',
          padding: '3rem',
          position: 'relative',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: '#e87602',
            border: 'none',
            fontSize: '1.5rem',
            color: '#ffffff',
            cursor: 'pointer',
            fontWeight: 'bold',
            zIndex: 1001,
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(232, 118, 2, 0.3)',
          }}
        >
          ×
        </motion.button>
        
        <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{fontSize: '2.5rem', fontWeight: '800', color: '#15400c', marginBottom: '1rem'}}
          >
            {expertise.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{fontSize: '1.1rem', color: '#15400c', opacity: 0.8, lineHeight: '1.7'}}
          >
            {expertise.description}
          </motion.p>
        </div>

        <div style={{marginBottom: '2.5rem'}}>
          <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#e87602', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <span>💼</span> My Works & Projects
          </h3>
          
          {isGraphicDesign ? (
            <div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem'}}>
                {/* Design Sample Images */}
                {[
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
                ].map((img, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    style={{textAlign: 'center'}}
                  >
                    <motion.img 
                      src={img.src} 
                      alt={img.label}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                        borderRadius: '16px',
                        border: '2px solid rgba(232, 118, 2, 0.2)',
                        cursor: 'pointer',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                      }}
                      onClick={() => window.open(img.src, '_blank')}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{display: 'none', padding: '2rem', background: '#f8f9fa', borderRadius: '16px', border: '2px solid #e87602'}}>
                      <span style={{color: '#e87602', fontWeight: '600'}}>{img.label}</span>
                    </div>
                    <p style={{fontSize: '0.95rem', color: '#15400c', marginTop: '0.75rem', fontWeight: '600'}}>{img.label}</p>
                  </motion.div>
                ))}
              </div>
              
              <ul style={{listStyle: 'none', padding: 0}}>
                {expertise.works.map((work, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    style={{
                      padding: '1.25rem',
                      marginBottom: '1rem',
                      background: '#f8f9fa',
                      borderRadius: '12px',
                      borderLeft: '5px solid #e87602',
                      fontSize: '1.05rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                    }}
                  >
                    {work}
                  </motion.li>
                ))}
              </ul>
            </div>
          ) : (
            <ul style={{listStyle: 'none', padding: 0}}>
              {expertise.works.map((work, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  style={{
                    padding: '1.25rem',
                    marginBottom: '1rem',
                    background: '#f8f9fa',
                    borderRadius: '12px',
                    borderLeft: '5px solid #e87602',
                    fontSize: '1.05rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                  }}
                >
                  {work}
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#e87602', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <span>🛠️</span> Technologies & Tools
          </h3>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.8rem'}}>
            {expertise.technologies.map((tech, idx) => (
              <motion.span 
                key={idx}
                whileHover={{ scale: 1.1, y: -2 }}
                style={{
                  background: 'linear-gradient(135deg, #e87602 0%, #ff8c1a 100%)',
                  color: '#ffffff',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '30px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 12px rgba(232, 118, 2, 0.2)'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}