import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Project from './components/Projects' // fixed: singular
import Skills from './Skills' // assuming Skills.jsx is directly under src
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import { projects } from './data/projects'
import { skills } from './data/skills'
import { services } from './data/services'

export default function App() {
  const phonenumber = '0701850383'
  const name = 'Austine Mukabwa'
  const email = 'relentlesstechies@gmail.com'
  const github = 'https://github.com/MKBrelentless'
  const linkedin = 'https://linkedin.com/in/austine-mukabwa'

  return (
    <div className="app-container">
      <Header name={name} />
      <main className="main-content">
        <Hero name={name} github={github} />
        <About resume="/resume.pdf" />
        <Services />
        <Project projects={projects} /> {/* matches Project.jsx */}
        <Contact email={email} github={github} linkedin={linkedin} phonenumber={phonenumber} />
        <Testimonials />
        <footer className="footer">
          © {new Date().getFullYear()} {name} — Built with ReTech
        </footer>
      </main>
    </div>
  )
}
