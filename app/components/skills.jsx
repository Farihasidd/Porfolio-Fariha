import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
    return (
        <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Skills & Capabilities</h2>
                <p className="text-slate-500 text-sm mt-2 font-semibold">Core frameworks, platforms, and databases I utilize</p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="flex flex-col items-center text-center w-20 group"
                    >
                        <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 transition-shadow duration-300 group-hover:shadow-[0_0_12px_0px_rgba(251,146,60,0.4)]">
                            {skill.icon}
                        </div>
                        <span className="font-semibold text-slate-700 text-sm">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}