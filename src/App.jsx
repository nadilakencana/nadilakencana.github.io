import React from 'react';
import { portfolioData } from './data/portfolioData';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div 
      className="min-h-screen font-sans leading-relaxed text-slate-200"
      style={{
        background: 'radial-gradient(circle at right top, rgb(12 55 163 / 40%), transparent 40%), radial-gradient(circle at left bottom, rgb(20 83 224 / 40%), transparent 50%), rgb(2, 6, 23)'
      }}
    >
      <Header name={portfolioData.name} />
      
      <main>
        <Hero 
          name={portfolioData.name}
          title={portfolioData.title}
          summary={portfolioData.summary}
          imageUrl={portfolioData.imageUrl}
          contact={portfolioData.contact}
        />
        
        {/* <About 
          summary={portfolioData.summary}
          education={portfolioData.education}
        /> */}
        
        <Experience experience={portfolioData.experience} />
        
        <Projects projects={portfolioData.projects} />
        
        <Certifications certifications={portfolioData.certifications} />
        
        <Skills 
          skills={portfolioData.skills}
          designTools={portfolioData.designTools}
        />
        
        <Contact contact={portfolioData.contact} />
      </main>
      
      <Footer name={portfolioData.name} />
    </div>
  );
}