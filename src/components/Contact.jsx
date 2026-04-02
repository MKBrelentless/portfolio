import React from 'react';
import { motion } from 'framer-motion';

export default function Contact({ email, github, linkedin, phonenumber }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const contactOptions = [
    { icon: "📧", label: "Email", value: email, href: `mailto:${email}` },
    { icon: "💬", label: "WhatsApp", value: phonenumber, href: `https://wa.me/254${phonenumber.substring(1)}` },
    { icon: "💻", label: "GitHub", value: "View Profile", href: github },
    { icon: "💼", label: "LinkedIn", value: "Connect", href: linkedin }
  ];

  return (
    <section id="contact" className="section-padding section-alt">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Get In Touch
      </motion.h2>
      <div style={{maxWidth: '650px', margin: '0 auto'}}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card" 
          style={{padding: '3.5rem', textAlign: 'center', borderRadius: '28px'}}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{fontSize: '1.2rem', marginBottom: '2.5rem', color: '#15400c', opacity: 0.9, lineHeight: '1.6'}}
          >
            I'm always open to discussing new opportunities, collaborations, or innovative AI solutions. Let's connect!
          </motion.p>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{display: 'flex', flexDirection: 'column', gap: '1.2rem'}}
          >
            {contactOptions.map((option, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ x: 10, backgroundColor: 'rgba(232, 118, 2, 0.05)' }}
                style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  gap: '1.5rem', 
                  padding: '1.2rem 2rem', 
                  background: '#f8f9fa', 
                  borderRadius: '16px',
                  border: '1px solid rgba(0,0,0,0.03)',
                  cursor: 'pointer'
                }}
                onClick={() => window.open(option.href, '_blank')}
              >
                <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem'}}>
                  <span style={{fontSize: '1.8rem'}}>{option.icon}</span>
                  <div style={{textAlign: 'left'}}>
                    <p style={{fontWeight: '700', color: '#e87602', fontSize: '0.9rem', marginBottom: '0.1rem', textTransform: 'uppercase'}}>{option.label}</p>
                    <p style={{color: '#15400c', fontWeight: '600', fontSize: '1.05rem'}}>{option.value}</p>
                  </div>
                </div>
                <motion.span 
                  whileHover={{ x: 5 }}
                  style={{color: '#e87602', fontSize: '1.2rem', fontWeight: 'bold'}}
                >
                  →
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}