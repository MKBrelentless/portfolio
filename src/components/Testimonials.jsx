import React, { useState } from 'react';

export default function Testimonials() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    rating: 5,
    testimonial: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Testimonial submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        project: '',
        rating: 5,
        testimonial: ''
      });
    }, 3000);
  };

  const projects = [
    'Networking Equipment/Solutions',
    'Graphic Design',
    'Websites Development',
    'Class Projects',
    'Others'
  ];

  return (
    <section className="section-padding">
      <h2 className="section-title">Share Your Experience</h2>
      <div style={{maxWidth: '700px', margin: '0 auto'}}>
        <div className="card" style={{padding: '3rem'}}>
          <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: '#15400c', opacity: 0.8, textAlign: 'center'}}>
            Collaborated or Purchased goods/Services from ReTech? I'd love to hear about your experience!
          </p>

          {isSubmitted ? (
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎉</div>
              <h3 style={{color: '#e87602', marginBottom: '1rem'}}>Thank You!</h3>
              <p style={{color: '#15400c'}}>Your testimonial has been submitted successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem'}}>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#15400c'}}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e9ecef',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#e87602'}
                    onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                  />
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#15400c'}}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e9ecef',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#e87602'}
                    onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                  />
                </div>
              </div>

              <div style={{marginBottom: '1.5rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#15400c'}}>
                  Project/Work *
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <option value="">Select a project...</option>
                  {projects.map((project, idx) => (
                    <option key={idx} value={project}>{project}</option>
                  ))}
                </select>
              </div>

              <div style={{marginBottom: '1.5rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#15400c'}}>
                  Rating
                </label>
                <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData(prev => ({...prev, rating: star}))}
                      style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '2rem',
                        cursor: 'pointer',
                        color: star <= formData.rating ? '#e87602' : '#e9ecef'
                      }}
                    >
                      ⭐
                    </button>
                  ))}
                  <span style={{marginLeft: '1rem', color: '#15400c'}}>
                    {formData.rating} star{formData.rating !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              <div style={{marginBottom: '2rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#15400c'}}>
                  Your Testimonial *
                </label>
                <textarea
                  name="testimonial"
                  value={formData.testimonial}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Share your experience working with me..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#e87602'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              <div style={{textAlign: 'center'}}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{fontSize: '1.1rem', padding: '1rem 2rem'}}
                >
                  Submit Testimonial
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}