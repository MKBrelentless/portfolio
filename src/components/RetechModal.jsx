import React from 'react';
import { motion } from 'framer-motion';

export default function RetechModal({ isOpen, onClose }) {
  if (!isOpen) return null;

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
          maxWidth: '750px',
          width: '100%',
          maxHeight: '85vh',
          overflow: 'auto',
          padding: '3.5rem',
          position: 'relative',
          borderRadius: '28px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        <motion.button 
          whileHover={{ scale: 1.1, rotate: -90 }}
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
        
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem'}}
          >
            <motion.img 
              src="/retech logo.png" 
              alt="Relentless Technologies Logo"
              whileHover={{ rotate: 5, scale: 1.1 }}
              style={{
                height: '80px',
                width: 'auto',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'inline-block';
              }}
            />
            <span style={{
              display: 'none',
              background: 'linear-gradient(135deg, #15400c 0%, #1a4d0f 100%)',
              color: '#e87602',
              padding: '0.6rem 1.2rem',
              borderRadius: '12px',
              fontWeight: '800',
              fontSize: '1.8rem'
            }}>
              ReTech
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{fontSize: '2.8rem', fontWeight: '800', color: '#15400c', marginBottom: '0.5rem', letterSpacing: '-0.5px'}}
          >
            Relentless Technologies Ltd
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{fontSize: '1.25rem', color: '#e87602', fontWeight: '700', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '1px'}}
          >
            Computer Electronics & IT Support Services
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{marginBottom: '2.5rem'}}
        >
          <h3 style={{fontSize: '1.6rem', fontWeight: '700', color: '#e87602', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <span>🏢</span> About Our Company
          </h3>
          <p style={{fontSize: '1.15rem', color: '#15400c', opacity: 0.9, lineHeight: '1.7', marginBottom: '1.5rem'}}>
            ReTech is a premier computer electronics and IT support firm specializing in comprehensive technology solutions. While we have a robust graphic design division, our primary focus and expertise lie in hardware infrastructure, network engineering, and professional IT support.
          </p>
        </motion.div>

        <div style={{marginBottom: '2.5rem'}}>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{fontSize: '1.6rem', fontWeight: '700', color: '#e87602', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}
          >
            <span>🛠️</span> Our Solutions
          </motion.h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            {[
              { title: "Network Equipment Sales", desc: "Premium Ethernet cables, routers, switches, and specialized accessories." },
              { title: "Software Installation", desc: "Expert setup and optimization of professional software suites." },
              { title: "Hardware Troubleshooting", desc: "Comprehensive repair for computers and mobile devices, including screen replacement and hardware forensics." },
              { title: "Website Creation & Maintenance", desc: "Enterprise-grade web development and robust ongoing support." },
              { title: "Graphics Design", desc: "Elite branding, logo architecture, and digital marketing assets." }
            ].map((service, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + (idx * 0.1) }}
                style={{
                  padding: '1.25rem',
                  marginBottom: '1rem',
                  background: 'rgba(232, 118, 2, 0.03)',
                  borderRadius: '16px',
                  borderLeft: '5px solid #e87602',
                  fontSize: '1.05rem',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                }}
              >
                <strong style={{color: '#15400c'}}>{service.title}</strong> — {service.desc}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{textAlign: 'center', marginTop: '3rem'}}
        >
          <p style={{fontSize: '1.1rem', color: '#15400c', opacity: 0.8, marginBottom: '1.5rem', fontWeight: '500'}}>
            Ready to experience relentless innovation?
          </p>
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(232, 118, 2, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="btn-primary" 
            onClick={onClose}
            style={{padding: '1rem 2.5rem', fontSize: '1.1rem'}}
          >
            Partner with ReTech
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}