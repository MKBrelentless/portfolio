import React from 'react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section-padding section-alt">
      <h2 className="section-title">Featured Projects</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto'}}>
        {projects && projects.length > 0 ? (
          projects.map((project, idx) => (
            <div key={idx} className="card" style={{padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#15400c', marginBottom: '1rem'}}>
                {project.title}
              </h3>
              <p style={{color: '#15400c', opacity: 0.8, lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1}}>
                {project.description}
              </p>
              
              {project.tech && (
                <div style={{marginBottom: '1.5rem'}}>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                    {project.tech.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        style={{
                          background: 'rgba(232, 118, 2, 0.1)',
                          color: '#e87602',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                {project.link && project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{fontSize: '0.9rem', padding: '0.75rem 1.5rem'}}>
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{background: 'transparent', color: '#e87602', border: '2px solid #e87602', fontSize: '0.9rem', padding: '0.75rem 1.5rem'}}>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p style={{color: '#15400c', textAlign: 'center'}}>No projects added yet.</p>
        )}
      </div>
    </section>
  );
}