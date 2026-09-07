'use client';

import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import Education from './components/education';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#eef3f8] text-slate-800 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}