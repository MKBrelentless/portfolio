import React, { useState } from 'react';

export default function About({ resume }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="section-padding section-alt">
      <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
        <h2 className="section-title">About Me</h2>
        <div className="card" style={{padding: '3rem', textAlign: 'left'}}>
          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                backgroundColor: '#e87602',
                color: '#ffffff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#d66a02'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#e87602'}
            >
              {isExpanded ? 'Hide Details' : 'Read About Me'}
            </button>
          </div>
          
          {isExpanded && (
          <div style={{marginBottom: '2.5rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', border: '2px solid rgba(232, 118, 2, 0.1)'}}>
            <h3 style={{fontSize: '1.3rem', fontWeight: '700', color: '#e87602', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              🎓 Education
            </h3>
            <p style={{fontSize: '1.1rem', color: '#15400c', opacity: 0.9, marginBottom: '0.5rem'}}>
              <strong>Bachelor of Science in Computer Science</strong>
            </p>
            <p style={{fontSize: '1rem', color: '#15400c', opacity: 0.8}}>
             <strong> Kisii University </strong> in Kisii county•  Currently a 4th Year Student • Expected Graduation: 2026

             
             
            </p>
            <p style={{fontSize: '1rem', color: '#15400c', opacity: 0.8}}>
             I attended <strong>Shagungu Secondary School</strong> in Kakamega county• 

           
             
            </p>
           
          </div>
          
          <p style={{fontSize: '1.1rem', marginBottom: '1.5rem', color: '#15400c', opacity: 0.9}}>
            I'm <strong>Austine Mukabwa</strong>, a born again, self-driven, passionate and disciplined Computer Scientist from Kenya.
            While I was on my attachment at Masinde Muliro University of science and technology, I was priviledged to attend their <strong>industrial training</strong>.
            I have interacted with most of the modules of Computer Science as described in my the <strong>Recommendation Letter</strong> which is my work experience section. I have had a hands on experience of each module of the course right away from hardware, software, databases, networking and up to system administration.
            I have paid a keen interest to the modules named above and I have all the acquired foundational knowledge and an understanding of most concepts.
            
            First and foremost, I am a <strong> Full Stack Javascript Developer</strong> with expertise in modern web technologies. 
            I specialize in creating efficient, scalable, and user-friendly applications that solve real-world problems using node.js in backend and react in frontend as my tech stack.I also do python for AI and Machine Learning which in most cases is embedded in my projects to make them smart in regards to user needs.
          </p>
          <p style={{fontSize: '1.1rem', marginBottom: '1.5rem', color: '#15400c', opacity: 0.9}}>
            With a strong foundation in both frontend and backend development, I bring ideas to life through 
            clean code and thoughtful design. My recent work includes developing AI-powered applications like the 
            Smart Food Assistant, showcasing my ability to integrate cutting-edge technologies.
          </p>
          <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: '#15400c', opacity: 0.9}}>
            I'm always eager to learn new technologies, take on challenging projects, and collaborate with teams 
            to deliver exceptional digital experiences.
            <p>I have studied <strong>System Administration</strong> also and I have a strong foundation in the module with some industry experience when I was on my attachment at Masinde Muliro University </p> 
          </p>
          
          <div style={{marginBottom: '2rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', border: '2px solid rgba(232, 118, 2, 0.1)'}}>
            <h3 style={{fontSize: '1.3rem', fontWeight: '700', color: '#e87602', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              🎵 Hobbies/Social Life
            </h3>
            <p style={{fontSize: '1.1rem', color: '#15400c', opacity: 0.9, marginBottom: '1rem'}}>
              I am a <strong>self-driven leader</strong> who takes responsibility seriously and inspires others through action. 
              My leadership style is built on accountability, innovation, and empowering team members to achieve their best.
            </p>
            <p style={{fontSize: '1.1rem', color: '#15400c', opacity: 0.9, marginBottom: '1rem'}}>
              As a <strong>talented musician</strong>, I express my creativity through playing the <strong>drums and piano</strong>. 
              Music helps me maintain balance and brings a creative perspective to my technical work.
            </p>
            <p style={{fontSize: '1.1rem', color: '#15400c', opacity: 0.9}}>
              I have a passion for <strong>adventure</strong> and love exploring new places and experiences. I'm also deeply 
              curious about <strong>understanding how technologies work</strong> - always eager to dive deep into the mechanics 
              and principles behind innovative solutions.
            </p>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <a href={resume} className="btn-primary" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}