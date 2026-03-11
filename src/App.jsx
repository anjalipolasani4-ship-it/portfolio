import React from 'react';
import NavBar from './components/NavBar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', overflowX: 'hidden', backgroundColor: 'var(--bg)' }}>
      <NavBar />
      <HomeSection />
      <hr className="divider" />
      <AboutSection />
      <hr className="divider" />
      <SkillsSection />
      <hr className="divider" />
      <WorkExperienceSection />
      <hr className="divider" />
      <ProjectsSection />
      <hr className="divider" />
      <EducationSection />
      <hr className="divider" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
