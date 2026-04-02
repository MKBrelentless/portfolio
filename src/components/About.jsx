import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RetechModal from './RetechModal';

export default function About({ resume }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRetechModalOpen, setIsRetechModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="section-padding section-alt">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="card" style={{padding: '3rem', textAlign: 'left', borderRadius: '24px'}}>
          {/* Action Buttons Section */}
          <div style={{textAlign: 'center', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem'}}>
            <motion.button 
              whileHover={{ scale: 1.05, borderColor: '#15400c', color: '#15400c' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsRetechModalOpen(true)}
              style={{
                backgroundColor: 'transparent',
                color: '#e87602',
                border: '2px solid #e87602',
                padding: '0.8rem 1.8rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Learn About Relentless Technologies (ReTech)
            </motion.button>

            <motion.button 
              layout
              whileHover={{ scale: 1.02, backgroundColor: '#d66a02' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                backgroundColor: '#e87602',
                color: '#ffffff',
                border: 'none',
                padding: '1rem 2.2rem',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(232, 118, 2, 0.2)'
              }}
            >
              {isExpanded ? 'Hide Professional Profile' : 'View Full Professional Profile'}
            </motion.button>
          </div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ overflow: 'hidden' }}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Introduction Bio */}
                  <motion.div variants={itemVariants} style={{marginBottom: '2.5rem'}}>
                    <p style={{fontSize: '1.2rem', color: '#15400c', lineHeight: '1.7', opacity: 0.95}}>
                      I am <strong>Austine Mukabwa</strong>, the founder of <strong>ReTech Ltd</strong> and a principled, self-driven Computer Scientist dedicated to excellence. While my company provides elite graphic design, my primary focus and expertise is in <strong>Computer Electronics and IT Support Services</strong>, delivering robust technical solutions that drive business continuity.
                    </p>
                  </motion.div>

                  {/* Academic Section */}
                  <motion.div 
                    variants={itemVariants}
                    style={{marginBottom: '2.5rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', border: '1px solid rgba(232, 118, 2, 0.1)'}}
                  >
                    <h3 style={{fontSize: '1.3rem', fontWeight: '700', color: '#e87602', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem'}}>
                      🎓 Academic Background
                    </h3>
                    <div style={{marginBottom: '1rem'}}>
                      <p style={{fontSize: '1.1rem', color: '#15400c', fontWeight: '700', marginBottom: '0.3rem'}}>
                        Bachelor of Science in Computer Science
                      </p>
                      <p style={{fontSize: '1rem', color: '#15400c', opacity: 0.8}}>
                        Kisii University | Final Year Student (Class of 2026)
                      </p>
                    </div>
                    <div>
                      <p style={{fontSize: '1rem', color: '#15400c', opacity: 0.8}}>
                        Secondary Education: Shagungu Secondary School, Kakamega County
                      </p>
                    </div>
                  </motion.div>

                  {/* Core Expertise Pillars - Ordered 1-5 */}
                  <motion.div variants={itemVariants} style={{marginBottom: '2.5rem'}}>
                    <h3 style={{fontSize: '1.3rem', fontWeight: '700', color: '#e87602', marginBottom: '1.5rem'}}>
                      🚀 Professional Expertise
                    </h3>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1.4rem'}}>
                      {[
                        "1. System Administration: Extensive industrial training at Masinde Muliro University (MMUST), with specialized experience in server environments, cloud infrastructure, and enterprise system management.",
                        "2. Fullstack JavaScript Development: Proficient in architecting scalable web applications, leveraging Node.js for high-performance backends and React for user-centric frontend experiences.",
                        "3. Network Administration: Proven track record in designing and securing robust network infrastructures, including high-impact projects such as the recabling of industrial-scale computer labs.",
                        "4. AI Integration: Dedicated to implementing advanced machine learning models and intelligent automation to create proactive, data-driven software solutions.",
                        "5. Graphic Design: Expertise in crafting cohesive visual brand identities and intuitive UI/UX designs that balance aesthetic appeal with functional excellence."
                      ].map((text, i) => (
                        <motion.p 
                          key={i}
                          variants={itemVariants}
                          style={{fontSize: '1.1rem', color: '#15400c', lineHeight: '1.6'}}
                        >
                          <strong>{text.split(':')[0]}:</strong>{text.split(':')[1]}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Leadership & Lifestyle Section */}
                  <motion.div 
                    variants={itemVariants}
                    style={{marginBottom: '3rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', border: '1px solid rgba(232, 118, 2, 0.1)'}}
                  >
                    <h3 style={{fontSize: '1.3rem', fontWeight: '700', color: '#e87602', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      🎵 Leadership & Creative Interests
                    </h3>
                    <p style={{fontSize: '1.05rem', color: '#15400c', opacity: 0.9, marginBottom: '1rem'}}>
                      I believe in purpose-driven leadership built on accountability and continuous learning. My creative side is expressed through music and active exploration of technological mechanics.
                    </p>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem'}}>
                      {["🎹 Piano & Drums", "🌍 Global Adventure", "🔍 Reverse Engineering"].map((interest, i) => (
                        <motion.div 
                          key={i}
                          whileHover={{ scale: 1.1, backgroundColor: '#ffffff', color: '#e87602' }}
                          style={{background: '#ffffff', padding: '0.8rem 1.2rem', borderRadius: '8px', border: '1px solid #eee', fontSize: '1rem', color: '#15400c', fontWeight: '500'}}
                        >
                          {interest}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Final CTA */}
                  <motion.div variants={itemVariants} style={{textAlign: 'center', marginTop: '2rem'}}>
                    <motion.a 
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(232, 118, 2, 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      href={resume} 
                      className="btn-primary" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{padding: '1.1rem 2.8rem', fontSize: '1.1rem'}}
                    >
                      Download Professional Resume
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isRetechModalOpen && (
          <RetechModal 
            isOpen={isRetechModalOpen} 
            onClose={() => setIsRetechModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}