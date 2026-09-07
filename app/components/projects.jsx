import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects =
        activeCategory === 'All'
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section
            id="projects"
            className="py-16 px-6 max-w-6xl mx-auto"
        >
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    My Creative{' '}
                    <span className="text-indigo-600">
                        Portfolio
                    </span>
                </h2>

                <p className="text-slate-500 text-sm mt-2 font-semibold">
                    Production mobile applications engineered for global store release
                </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {projectCategories.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveCategory(tab)}
                        className={`
                            px-5 py-2.5
                            rounded-xl
                            text-xs
                            font-bold
                            transition-all
                            duration-200
                            ${activeCategory === tab
                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                            }
                        `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Projects */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((proj) => (
                        <motion.div
                            key={proj.title}
                            layout
                            initial={{
                                opacity: 0,
                                scale: 0.97,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.97,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                            className="
        bg-white
        rounded-xl
        border
        border-slate-200
        overflow-hidden
        group
        transition-all
        duration-300
        shadow-[0_4px_15px_rgba(15,23,42,0.06)]
        hover:-translate-y-1
        hover:shadow-[0_18px_45px_rgba(15,23,42,0.16)]
        p-3
    "
                        >
                            {/* Image */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg group/image">
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                group-hover/image:scale-[1.04]
            "
                                />

                                {/* Image Hover Overlay */}
                                {proj.link && (
                                    <a
                                        href={proj.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`View ${proj.title} case study`}
                                        className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover/image:bg-black/40
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                    z-20
                "
                                    >
                                        <span
                                            className="
                        w-12
                        h-12
                        rounded-full
                        bg-white
                        flex
                        items-center
                        justify-center
                        opacity-0
                        scale-75
                        group-hover/image:opacity-100
                        group-hover/image:scale-100
                        transition-all
                        duration-300
                        shadow-xl
                    "
                                        >
                                            <Eye
                                                size={20}
                                                strokeWidth={2.5}
                                                className="text-slate-900"
                                            />
                                        </span>
                                    </a>
                                )}
                            </div>

                            {/* Content */}
                            <div className="px-3 pt-5 pb-3 text-center">
                                <h3 className="text-lg font-bold text-slate-800 mb-3">
                                    {proj.title}
                                </h3>

                                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                                    {proj.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}