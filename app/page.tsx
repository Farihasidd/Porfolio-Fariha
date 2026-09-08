
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
import About from './components/about';

// ============================================
// Section animation
// ============================================

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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

// ============================================
// Navbar animation
// ============================================

const navbarVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
    filter: 'blur(6px)',
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ============================================
// Hero animation
// ============================================

const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
    filter: 'blur(8px)',
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ============================================
// Animated Section
// ============================================

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
        amount: 0.05,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// Portfolio
// ============================================

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#eef3f8] text-slate-800 font-sans selection:bg-indigo-500 selection:text-white">

      {/* Navbar */}

      <Navbar />

      {/* Hero */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <Hero />
      </motion.div>

      {/* About */}
      <AnimatedSection delay={0.05}>
        <About />
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection delay={0.08}>
        <Services />
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection delay={0.1}>
        <Skills />
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection delay={0.08}>
        <Experience />
      </AnimatedSection>

      {/* Projects */}
      <AnimatedSection delay={0.1}>
        <Projects />
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection delay={0.08}>
        <Education />
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection delay={0.1}>
        <Contact />
      </AnimatedSection>

      {/* Footer */}
      <Footer />

    </div>
  );
}

