
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MessageCircle,
    ArrowUpRight,
} from 'lucide-react';
import {
    FaGithub,
    FaLinkedinIn,
} from 'react-icons/fa';

const contactOptions = [
    {
        title: 'Email',
        description: 'Best for project inquiries',
        href: 'mailto:farihasiddique50@gmail.com',
        icon: Mail,
        primary: true,
    },
    {
        title: 'WhatsApp',
        description: 'Quick chat & availability',
        href: 'https://wa.me/+923247066049',
        icon: MessageCircle,
    },
    {
        title: 'Call Me',
        description: 'Let’s discuss your project',
        href: 'tel:+923247066049',
        icon: Phone,
    },
    {
        title: 'LinkedIn',
        description: 'Connect professionally',
        href: 'https://www.linkedin.com/in/fariha-siddiqui-740175199/',
        icon: FaLinkedinIn,
    },
    {
        title: 'GitHub',
        description: 'Explore my work',
        href: 'https://github.com/Farihasidd',
        icon: FaGithub,
    },

];

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-3 px-6 max-w-5xl mx-auto"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-2xl"
            >
                {/* Background decorations */}
                <div className="absolute -top-32 -right-32 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="relative z-10 p-8 sm:p-12 lg:p-14">

                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto">

                        {/* Availability */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                            </span>

                            Available for new projects
                        </motion.div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5">
                            Let's Work{' '}
                            <span className="text-indigo-400">
                                Together
                            </span>
                        </h2>

                        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                            Have an idea, need a mobile application, or
                            looking to modernize an existing product?
                            Let's turn your idea into something great.
                        </p>
                    </div>

                    {/* Primary CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="flex justify-center mt-9"
                    >
                        <motion.a
                            href="mailto:farihasiddique50@gmail.com"
                            whileHover={{
                                scale: 1.04,
                                y: -2,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/20 transition-colors"
                        >
                            <Mail size={18} />

                            Send me an email

                            <ArrowUpRight
                                size={17}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </motion.a>
                    </motion.div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-10">
                        <div className="h-px flex-1 bg-slate-700/70" />

                        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                            Or connect with me
                        </span>

                        <div className="h-px flex-1 bg-slate-700/70" />
                    </div>

                    {/* Contact Options */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {contactOptions.slice(1).map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.a
                                    key={item.title}
                                    href={item.href}
                                    target={
                                        item.href.startsWith('http')
                                            ? '_blank'
                                            : undefined
                                    }
                                    rel={
                                        item.href.startsWith('http')
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: 0.3 + index * 0.08,
                                        duration: 0.5,
                                    }}
                                    whileHover={{
                                        y: -5,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className="group flex w-full sm:w-[180px] lg:w-[160px] flex-col items-center text-center p-4 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.08] hover:border-indigo-400/30 transition-all"
                                >
                                    <div className="flex items-center justify-center w-11 h-11 mb-3 rounded-xl bg-slate-800 group-hover:bg-indigo-600/20 transition-colors">
                                        <Icon
                                            size={20}
                                            className="text-slate-300 group-hover:text-indigo-400 transition-colors"
                                        />
                                    </div>

                                    <span className="text-xs font-bold text-slate-200">
                                        {item.title}
                                    </span>

                                    <span className="text-[10px] text-slate-500 mt-1">
                                        {item.description}
                                    </span>
                                </motion.a>
                            );
                        })}
                    </div>


                </div>
            </motion.div>
        </section>
    );
}

