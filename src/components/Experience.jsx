import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Founder & Lead Technologist',
    company: 'ReTech',
    type: 'Entrepreneurship',
    period: 'August 2025 — Present',
    duration: 'Ongoing',
    icon: '🚀',
    color: '#e87602',
    summary: 'The skilled and dedicated mind behind ReTech — a technology venture built from the ground up.',
    highlights: [
      'Founded and architected ReTech from scratch, establishing its technical vision, brand identity, and service offerings.',
      'Designed and developed the full technology stack powering ReTech\'s digital products and client solutions.',
      'Created all branding and graphic design assets including logos, marketing materials, and promotional content.',
      'Lead all system administration, network infrastructure, and cloud deployment operations.',
      'Integrated AI-powered solutions into client projects, including smart recommendation systems and automation tools.',
      'Managed end-to-end project delivery — from client consultation and requirements gathering to deployment and support.',
      'Built and maintained ReTech\'s online presence, portfolio, and client-facing platforms.',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Adobe Photoshop', 'Figma', 'AI/ML Integration'],
  },
  {
    id: 2,
    role: 'IT Attachment Student',
    company: 'Masinde Muliro University of Science & Technology',
    type: 'Industrial Attachment',
    period: '12th May 2025 — 3rd August 2025',
    duration: '~3 Months',
    icon: '🎓',
    color: '#15400c',
    summary: 'Hands-on industrial attachment at MMUST, gaining real-world experience across IT infrastructure, networking, and systems management.',
    highlights: [
      'Managed and maintained the university\'s IT infrastructure, ensuring high availability of critical systems and services.',
      'Led the recabling project of the MMUST computer laboratory as the lead technician, overseeing structured cabling and network layout.',
      'Configured and administered network equipment including routers, switches, and access points across campus.',
      'Provided technical support and troubleshooting for staff and students, resolving hardware, software, and connectivity issues.',
      'Assisted in the installation and configuration of CCTV security systems across university premises.',
      'Documented IT processes, network diagrams, and maintenance logs to support the university\'s IT department operations.',
      'Collaborated with senior IT staff on system upgrades, patch management, and security protocol implementation.',
    ],
    technologies: ['Network Administration', 'Structured Cabling', 'CCTV Systems', 'TCP/IP', 'Windows Server', 'Hardware Maintenance'],
    supervisors: [
      { name: 'Sophy Nderaisho', role: 'Attachment Supervisor', phone: '0722838784', icon: '👩‍💼' },
      { name: 'Amkanga Michael', role: 'School Administrator', phone: '0727098074', icon: '🏫' },
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Work Experience
      </motion.h2>
      <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#15400c', opacity: 0.75 }}>
        Real-world experience that shaped my technical expertise and professional mindset.
      </p>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem', position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '2rem',
          top: 0,
          bottom: 0,
          width: '3px',
          background: 'linear-gradient(180deg, #e87602 0%, #15400c 100%)',
          borderRadius: '2px',
          display: 'none',
        }} className="timeline-line" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: idx * 0.15 }}
            style={{ marginBottom: '2rem' }}
          >
            <div
              className="card"
              style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
            >
              {/* Header */}
              <div style={{
                padding: '1.8rem 2rem',
                borderLeft: `5px solid ${exp.color}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '1rem',
                flexWrap: 'wrap',
              }}>
                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: `${exp.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {exp.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#15400c', marginBottom: '0.3rem' }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: '1.05rem', fontWeight: '700', color: exp.color, marginBottom: '0.3rem' }}>
                      {exp.company}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{
                        fontSize: '0.85rem',
                        background: `${exp.color}15`,
                        color: exp.color,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontWeight: '600',
                      }}>
                        {exp.type}
                      </span>
                      <span style={{ fontSize: '0.9rem', color: '#15400c', opacity: 0.65 }}>
                        📅 {exp.period}
                      </span>
                      <span style={{ fontSize: '0.9rem', color: '#15400c', opacity: 0.65 }}>
                        ⏱ {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expanded === exp.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ fontSize: '1.4rem', color: exp.color, flexShrink: 0, marginTop: '0.5rem' }}
                >
                  ▼
                </motion.div>
              </div>

              {/* Summary always visible */}
              <div style={{ padding: '0 2rem 1.5rem 2rem', borderLeft: `5px solid ${exp.color}` }}>
                <p style={{ color: '#15400c', opacity: 0.8, lineHeight: '1.7', fontStyle: 'italic' }}>
                  {exp.summary}
                </p>
              </div>

              {/* Expandable details */}
              <AnimatePresence>
                {expanded === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ overflow: 'hidden', borderLeft: `5px solid ${exp.color}` }}
                  >
                    <div style={{ padding: '0 2rem 2rem 2rem' }}>
                      <div style={{ height: '1px', background: `${exp.color}20`, marginBottom: '1.5rem' }} />

                      <h4 style={{ fontSize: '1rem', fontWeight: '700', color: exp.color, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>📌</span> Key Responsibilities & Achievements
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.8rem' }}>
                        {exp.highlights.map((point, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06 }}
                            style={{
                              display: 'flex',
                              gap: '0.75rem',
                              marginBottom: '0.85rem',
                              fontSize: '0.98rem',
                              color: '#15400c',
                              lineHeight: '1.65',
                            }}
                          >
                            <span style={{ color: exp.color, fontWeight: '800', flexShrink: 0, marginTop: '2px' }}>▸</span>
                            {point}
                          </motion.li>
                        ))}
                      </ul>

                      <h4 style={{ fontSize: '1rem', fontWeight: '700', color: exp.color, marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>🛠</span> Technologies & Tools
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.08, y: -2 }}
                            style={{
                              background: `linear-gradient(135deg, ${exp.color} 0%, ${exp.color}cc 100%)`,
                              color: '#fff',
                              padding: '0.45rem 1rem',
                              borderRadius: '25px',
                              fontSize: '0.88rem',
                              fontWeight: '600',
                              boxShadow: `0 3px 10px ${exp.color}30`,
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {exp.supervisors && (
                        <>
                          <div style={{ height: '1px', background: `${exp.color}20`, margin: '1.8rem 0 1.5rem' }} />
                          <h4 style={{ fontSize: '1rem', fontWeight: '700', color: exp.color, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>👤</span> Supervisors & References
                          </h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {exp.supervisors.map((s, i) => (
                              <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.9rem',
                                background: `${exp.color}08`,
                                border: `1.5px solid ${exp.color}25`,
                                borderRadius: '14px',
                                padding: '0.9rem 1.3rem',
                                flex: '1 1 220px',
                              }}>
                                <span style={{ fontSize: '2rem' }}>{s.icon}</span>
                                <div>
                                  <p style={{ fontWeight: '700', color: '#15400c', fontSize: '0.98rem', marginBottom: '0.15rem' }}>{s.name}</p>
                                  <p style={{ fontSize: '0.85rem', color: exp.color, fontWeight: '600', marginBottom: '0.15rem' }}>{s.role}</p>
                                  <a href={`tel:${s.phone}`} style={{ fontSize: '0.85rem', color: '#15400c', opacity: 0.7, textDecoration: 'none' }}>📞 {s.phone}</a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
