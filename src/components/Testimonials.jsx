import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    rating: 5,
    testimonial: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const triggerSuccess = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        rating: 5,
        testimonial: ''
      });
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // IMPORTANT: Get your free access key at https://web3forms.com/
    // It will email 'relentlesstechies@gmail.com' directly (or whatever email you register with)
    const WEB3FORMS_ACCESS_KEY = "cd0a85c3-7060-403a-937c-e0aae69954a8";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New ReTech Testimonial from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          Work_Category: formData.project,
          Rating: `${formData.rating} Stars`,
          message: formData.testimonial
        }),
      });

      const result = await response.json();
      setIsSubmitting(false);

      if (result.success) {
        triggerSuccess();
      } else {
        alert("Something went wrong while submitting. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert("Failed to send testimonial. Please check your connection.");
    }
  };

  const projects = [
    'Networking Equipment/Solutions',
    'Laptop and Phone Repairs',
    'Software Installation',
    'Graphic Design',
    'Websites Development',
    'Class Projects',
    'Others'
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Share Your Experience
      </motion.h2>
      <div style={{ maxWidth: '750px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{ padding: '3.5rem', borderRadius: '28px', border: '1px solid rgba(232, 118, 2, 0.05)' }}
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{ textAlign: 'center', padding: '3rem' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  style={{ fontSize: '4.5rem', marginBottom: '1.5rem' }}
                >
                  🎉
                </motion.div>
                <h3 style={{ color: '#e87602', fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>Successful!</h3>
                <p style={{ color: '#15400c', fontSize: '1.15rem', opacity: 0.9 }}>
                  Your feedback is highly valued. Thank you for your review!
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: '#15400c', opacity: 0.85, textAlign: 'center', lineHeight: '1.6' }}
                >
                  Purchased goods or used ReTech services recently? I'd love to hear about the expertise you experienced!
                </motion.p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <motion.div variants={itemVariants}>
                    <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: '700', color: '#15400c', fontSize: '0.95rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. John Doe"
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      className="form-input"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: '700', color: '#15400c', fontSize: '0.95rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                      title="Please enter a valid email address (e.g. user@example.com)"
                      placeholder="e.g. email@example.com"
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: '700', color: '#15400c', fontSize: '0.95rem' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. +254 700 000000"
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: '700', color: '#15400c', fontSize: '0.95rem' }}>
                    In Relation To *
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e9ecef',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      outline: 'none',
                      backgroundColor: '#ffffff',
                      appearance: 'none',
                      backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23e87602%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem top 50%',
                      backgroundSize: '0.65rem auto'
                    }}
                  >
                    <option value="">Select work category...</option>
                    {projects.map((project, idx) => (
                      <option key={idx} value={project}>{project}</option>
                    ))}
                  </select>
                </motion.div>

                <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '700', color: '#15400c', fontSize: '0.95rem' }}>
                    Overall Rating
                  </label>
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        key={star}
                        type="button"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                        style={{
                          background: 'none',
                          border: 'none',
                          fontSize: '2.5rem',
                          cursor: 'pointer',
                          color: star <= formData.rating ? '#e87602' : '#e9ecef',
                          transition: 'color 0.2s ease'
                        }}
                      >
                        ⭐
                      </motion.button>
                    ))}
                    <motion.span
                      key={formData.rating}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      style={{ marginLeft: '1rem', color: '#15400c', fontWeight: '700', fontSize: '1.1rem' }}
                    >
                      {formData.rating}/5
                    </motion.span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} style={{ marginBottom: '2.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: '700', color: '#15400c', fontSize: '0.95rem' }}>
                    Your Testimonial *
                  </label>
                  <textarea
                    name="testimonial"
                    value={formData.testimonial}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell others about the quality of service..."
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e9ecef',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </motion.div>

                <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.05, boxShadow: '0 10px 20px rgba(232, 118, 2, 0.3)' } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    className="btn-primary"
                    style={{
                      fontSize: '1.15rem',
                      padding: '1.1rem 3rem',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'wait' : 'pointer'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Post Testimonial'}
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}