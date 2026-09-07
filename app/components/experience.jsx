import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';

export default function Experience() {
    return (
        <section id="experience" className="py-16 px-6 max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Work Experience</h2>
                <p className="text-slate-500 text-sm mt-2 font-semibold">My professional journey across software houses and clients</p>
            </div>

            {/* Mobile layout */}
            <div className="sm:hidden relative">
                <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-slate-300"></div>
                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative flex items-start gap-4">
                            <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center ring-1 ring-slate-200">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-slate-900 ${exp.badgeBg}`}>
                                    {exp.badgeLetter}
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`relative flex-1 p-5 rounded-3xl ${exp.colorBg} shadow-sm`}
                            >
                                <div className="absolute top-6 -left-2 w-4 h-4 rotate-45 ${exp.colorBg}" style={{ backgroundColor: 'inherit' }}></div>
                                <h3 className="text-lg font-black text-slate-900">{exp.role}</h3>
                                <p className="text-sm font-bold text-slate-800 mb-3">{exp.company} — {exp.location}</p>
                                <p className="text-sm font-medium text-slate-900 leading-relaxed">{exp.desc}</p>
                                <p className="text-sm font-semibold text-slate-600 mt-3">{exp.period}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden sm:block relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 -translate-x-1/2"></div>

                <div className="space-y-16">
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="grid grid-cols-[1fr_56px_1fr] items-center gap-6"
                            >
                                <div className="flex justify-end">
                                    {isLeft ? (
                                        <Card exp={exp} pointerSide="right" fromX={-20} />
                                    ) : (
                                        <span className="text-sm font-bold text-slate-500 pr-2">
                                            {exp.period}
                                        </span>
                                    )}
                                </div>

                                <div className="flex justify-center relative z-10">
                                    <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center ring-1 ring-slate-200">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-slate-900 ${exp.badgeBg}`}>
                                            {exp.badgeLetter}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-start">
                                    {!isLeft ? (
                                        <Card exp={exp} pointerSide="left" fromX={20} />
                                    ) : (
                                        <span className="text-sm font-bold text-slate-500 pl-2">
                                            {exp.period}
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function Card({ exp, pointerSide, fromX }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: fromX }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative w-full max-w-md p-8 rounded-3xl ${exp.colorBg} shadow-sm`}
        >
            <h3 className="text-xl font-black text-slate-900">{exp.role}</h3>
            <p className="text-sm font-bold text-slate-800 mb-3">{exp.company} — {exp.location}</p>
            <p className="text-sm font-medium text-slate-900 leading-relaxed">{exp.desc}</p>

            <div
                className={`absolute top-8 w-4 h-4 rotate-45 ${exp.colorBg} ${pointerSide === 'right' ? '-right-2' : '-left-2'
                    }`}
            ></div>
        </motion.div>
    );
}