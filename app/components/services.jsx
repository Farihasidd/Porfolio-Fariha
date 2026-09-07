'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/portfolioData';

export default function Services() {
    return (
        <section id="about-me" className="py-16 px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {services.map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="flex flex-col cursor-pointer group"
                    >
                        {/* 3D Illustration Container */}
                        <div className="w-2/3 mx-auto aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/60 mb-3">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col space-y-1 text-center">
                            <h3 className="font-bold text-slate-900 text-md leading-snug">
                                {item.title}
                            </h3>
                            {/* {item.desc && (
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            )} */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}