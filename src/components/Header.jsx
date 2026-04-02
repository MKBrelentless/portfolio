import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80); // Default height

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Graphics', href: '#graphics' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 w-full z-50 shadow-md" 
        style={{backgroundColor: '#15400c', borderBottom: '2px solid rgba(232, 118, 2, 0.3)'}}
        onLayoutMeasure={(box) => setHeaderHeight(box.height)}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              style={{fontSize: 'clamp(1.2rem, 4vw, 2rem)', fontWeight: '800', color: '#e87602', cursor: 'pointer', letterSpacing: '-0.5px'}}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {name}
            </motion.h1>
            
            {/* Desktop Menu */}
            <nav className="hidden md:block" aria-label="Main navigation">
              <ul className="flex gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a 
                      href={link.href}
                      whileHover={{ scale: 1.1, backgroundColor: '#e87602', color: '#ffffff' }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        color: '#ffffff', 
                        fontWeight: '600', 
                        fontSize: '0.95rem', 
                        padding: '0.5rem 1.2rem', 
                        borderRadius: '8px', 
                        textDecoration: 'none',
                        display: 'inline-block'
                      }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span style={{color: '#ffffff', fontWeight: '600', fontSize: '0.9rem'}}>MENU</span>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{color: '#e87602', fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center'}}
              >
                <motion.span animate={{ rotate: isOpen ? 90 : 0 }}>
                  {isOpen ? '✕' : '☰'}
                </motion.span>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden mt-4 overflow-hidden" 
                aria-label="Mobile navigation"
              >
                <ul className="flex flex-col gap-2 pb-2">
                  {navLinks.map((link, idx) => (
                    <motion.li 
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <a 
                        href={link.href} 
                        style={{
                          color: '#ffffff', 
                          fontWeight: '600', 
                          padding: '0.8rem 1rem', 
                          display: 'block', 
                          borderRadius: '8px', 
                          textDecoration: 'none',
                          backgroundColor: 'rgba(255,255,255,0.05)'
                        }} 
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
      
      {/* Spacer to prevent content from hiding under the fixed header */}
      <div style={{ height: `${headerHeight}px` }} aria-hidden="true" />
    </>
  );
}