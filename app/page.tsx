'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import Education from './components/education';
import Contact from './components/contact';
import Footer from './components/footer';

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const navbarVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#eef3f8] text-slate-800 font-sans selection:bg-indigo-500 selection:text-white">

      {/* Navbar */}
      <motion.div
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <Navbar />
      </motion.div>

      {/* Hero */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <Hero />
      </motion.div>

      {/* Services */}
      <AnimatedSection>
        <Services />
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection delay={0.05}>
        <Skills />
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection>
        <Experience />
      </AnimatedSection>

      {/* Projects */}
      <AnimatedSection>
        <Projects />
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection>
        <Education />
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection>
        <Contact />
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection>
        <Footer />
      </AnimatedSection>

    </div>
  );
}