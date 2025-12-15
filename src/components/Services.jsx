import React, { useState } from 'react';
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

  return (
    <>
      <section id="services" className="section-padding">
        <h2 className="section-title">Skills</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto'}}>
          {skillsDetailed.map((skill) => (
            <div 
              key={skill.id} 
              className="card" 
              style={{padding: '2.5rem', textAlign: 'center', cursor: 'pointer'}}
              onClick={() => handleSkillClick(skill)}
            >
              <div style={{fontSize: '3rem', marginBottom: '1.5rem'}}>{skill.icon}</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#15400c', marginBottom: '1rem'}}>
                {skill.title}
              </h3>
              <p style={{color: '#15400c', opacity: 0.8, lineHeight: '1.6', marginBottom: '1rem'}}>
                {skill.description}
              </p>
              <p style={{color: '#e87602', fontWeight: '600', fontSize: '0.9rem'}}>
                Click to view details →
              </p>
            </div>
          ))}
        </div>
      </section>

      {selectedSkill && (
        <SkillDetail 
          skill={selectedSkill} 
          onClose={handleCloseDetail}
        />
      )}
    </>
  );
}