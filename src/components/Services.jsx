import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillDetail from './SkillDetail';
import { skillsDetailed } from '../data/skillsDetailed';

export default function Services() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleCloseDetail = () => {
    setSelectedSkill(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <section id="services" className="section-padding">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Specialized Skills
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', maxWidth: '1100px', margin: '0 auto'}}
        >
          {skillsDetailed.map((skill) => (
            <motion.div 
              key={skill.id} 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: '0 20px 40px rgba(21, 64, 12, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
              className="card" 
              style={{
                padding: '3rem 2rem', 
                textAlign: 'center', 
                cursor: 'pointer',
                border: '1px solid rgba(232, 118, 2, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '20px'
              }}
              onClick={() => handleSkillClick(skill)}
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}
              >
                {skill.icon}
              </motion.div>
              <h3 style={{fontSize: '1.6rem', fontWeight: '800', color: '#15400c', marginBottom: '1rem'}}>
                {skill.title}
              </h3>
              <p style={{color: '#15400c', opacity: 0.85, lineHeight: '1.7', marginBottom: '1.5rem'}}>
                {skill.description}
              </p>
              <motion.p 
                whileHover={{ x: 5 }}
                style={{color: '#e87602', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '0.5px'}}
              >
                Explore Expertise →
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedSkill && (
          <SkillDetail 
            skill={selectedSkill} 
            onClose={handleCloseDetail}
          />
        )}
      </AnimatePresence>
    </>
  );
}