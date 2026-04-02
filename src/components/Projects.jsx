import React from 'react';
import { motion } from 'framer-motion';

export default function Projects({ projects }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="section-padding section-alt">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Featured Projects
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '1100px', margin: '0 auto'}}
      >
        {projects && projects.length > 0 ? (
          projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="card" 
              style={{
                padding: '2.5rem', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                borderRadius: '24px',
                border: '1px solid rgba(232, 118, 2, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <h3 style={{fontSize: '1.6rem', fontWeight: '800', color: '#15400c', marginBottom: '1.2rem', lineHeight: '1.2'}}>
                {project.title}
              </h3>
              <p style={{color: '#15400c', opacity: 0.85, lineHeight: '1.7', marginBottom: '1.8rem', flexGrow: 1, fontSize: '1.05rem'}}>
                {project.description}
              </p>
              
              {project.tech && (
                <div style={{marginBottom: '1.8rem'}}>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.6rem'}}>
                    {project.tech.map((tech, techIdx) => (
                      <motion.span 
                        key={techIdx}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(232, 118, 2, 0.2)' }}
                        style={{
                          background: 'rgba(232, 118, 2, 0.1)',
                          color: '#e87602',
                          padding: '0.4rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: '700',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
              
              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: 'auto'}}>
                {project.link && project.link !== '#' && (
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary" 
                    style={{fontSize: '0.95rem', padding: '0.8rem 1.8rem'}}
                  >
                    Live Demo
                  </motion.a>
                )}
                {project.github && (
                  <motion.a 
                    whileHover={{ scale: 1.05, borderColor: '#e87602' }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary" 
                    style={{background: 'transparent', color: '#e87602', border: '2px solid #e87602', fontSize: '0.95rem', padding: '0.8rem 1.8rem'}}
                  >
                    GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))
        ) : (
          <p style={{color: '#15400c', textAlign: 'center', gridColumn: '1/-1'}}>No projects added yet.</p>
        )}
      </motion.div>
    </section>
  );
}