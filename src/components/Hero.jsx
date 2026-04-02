import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExpertiseDetail from './ExpertiseDetail';
import RetechModal from './RetechModal';
import { expertiseAreas } from '../data/expertiseAreas';

export default function Hero({ name, github }) {
  const [selectedExpertise, setSelectedExpertise] = useState(null);
  const [showRetechModal, setShowRetechModal] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

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
      <section id="hero" className="container" style={{background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', minHeight: '100vh', padding: '2rem 1rem'}}>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{width: '100%'}}
        >
          {/* Profile Section - Top Left */}
          <motion.div variants={itemVariants} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem', textAlign: 'center'}}>
            <motion.img 
              src="/ReTech Founder.JPG" 
              alt="Austine Mukabwa - Founder of Relentless Technologies"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                border: '3px solid #e87602',
                boxShadow: '0 4px 20px rgba(232, 118, 2, 0.3)',
                cursor: 'pointer',
              }}
              onClick={() => window.open('/ReTech Founder.JPG', '_blank')}
            />
            
            <div>
              <motion.h1 
                variants={itemVariants}
                style={{fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '800', color: '#15400c', marginBottom: '0.5rem', lineHeight: '1.1', textAlign: 'center'}}
              >
                {name}
              </motion.h1>
              <motion.div variants={itemVariants} style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', justifyContent: 'center'}}>
                <motion.img 
                  src="/retech logo.png" 
                  alt="Relentless Technologies Logo"
                  whileHover={{ scale: 1.1, filter: "brightness(1.1)" }}
                  style={{ height: '80px', width: 'auto', cursor: 'pointer' }}
                  onClick={() => window.open('/retech logo.png', '_blank')}
                />
                <span style={{fontSize: '1.1rem', color: '#e87602', fontWeight: '700'}}>
                  Founder & CEO, Relentless Technologies
                </span>
              </motion.div>
              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "#1a4d0f" }}
                whileTap={{ scale: 0.95 }}
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
                Click to view ReTech Ltd
              </motion.button>
            </div>
          </motion.div>

          {/* Main Content - Expertise */}
          <div style={{width: '100%', textAlign: 'center', marginTop: '2rem'}}>
            <motion.h2 
              variants={itemVariants}
              style={{fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', color: '#e87602', fontWeight: '700', marginBottom: '2rem'}}
            >
              Areas of Expertise
            </motion.h2>
            
            <motion.div 
              variants={containerVariants}
              style={{marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}
            >
              {expertiseAreas.map((expertise, idx) => (
                <motion.div 
                  key={expertise.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 10,
                    backgroundColor: 'rgba(232, 118, 2, 0.15)',
                    borderColor: '#e87602',
                    boxShadow: '0 8px 25px rgba(232, 118, 2, 0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleExpertiseClick(expertise)}
                  style={{
                    fontSize: '1rem',
                    color: '#15400c',
                    fontWeight: '600',
                    padding: '1.25rem',
                    background: 'rgba(232, 118, 2, 0.05)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    border: '2px solid transparent',
                    textAlign: 'left',
                    width: '100%',
                    marginBottom: '0.5rem',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                  }}
                >
                  <strong style={{fontSize: '1.1rem'}}>{idx + 1}. {expertise.title}</strong>
                  <span style={{fontSize: '0.9rem', color: '#e87602', float: 'right', fontWeight: '700'}}>Explore Details →</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              style={{fontSize: '1.2rem', color: '#15400c', opacity: 0.8, marginBottom: '3rem', lineHeight: '1.6'}}
            >
              Passionate about creating innovative web applications and integrating AI solutions to solve real-world problems
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}
            >
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(232, 118, 2, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="btn-primary" 
                style={{fontSize: '1.1rem', padding: '1rem 2rem'}}
              >
                View My Work
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, borderColor: "#e87602", color: "#e87602" }}
                whileTap={{ scale: 0.95 }}
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary" 
                style={{background: 'transparent', color: '#e87602', border: '2px solid #e87602', fontSize: '1.1rem', padding: '1rem 2rem'}}
              >
                GitHub Profile
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "#1a4d0f" }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="btn-primary" 
                style={{background: '#15400c', color: '#ffffff', fontSize: '1.1rem', padding: '1rem 2rem'}}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedExpertise && (
          <ExpertiseDetail 
            expertise={selectedExpertise} 
            onClose={handleCloseDetail}
          />
        )}

        {showRetechModal && (
          <RetechModal 
            isOpen={showRetechModal}
            onClose={handleRetechModalClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}