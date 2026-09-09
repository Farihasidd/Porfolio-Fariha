'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#eef3f8]/85 backdrop-blur-md border-b border-slate-200/60">
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">

                    {/* Logo */}
                    <a href="#home" className="flex items-center">
                        <img
                            src="/Porfolio-Fariha/images/logo.png"
                            alt="Logo"
                            className="h-10 w-auto"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-wider text-slate-500 absolute left-1/2 -translate-x-1/2">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="hover:text-indigo-600 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Spacer */}
                    <div className="hidden md:block w-10" />

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-8 h-8 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center text-slate-700 hover:text-indigo-600 transition-colors"
                        aria-label="Toggle menu"
                    >


                        <AnimatePresence mode="wait" initial={false}>
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={16} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </nav >

            {/* Mobile Menu */}
            < AnimatePresence >
                {isMenuOpen && (
                    <>
                        {/* Background Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={closeMenu}
                            className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm md:hidden"
                        />

                        {/* Side Drawer */}
                        <motion.div
                            initial={{ x: '100%', opacity: 0.8 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0.8 }}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-[82%] max-w-sm bg-white shadow-2xl md:hidden"
                        >
                            {/* Drawer Header */}
                            <div className="h-20 px-6 flex items-center justify-between border-b border-slate-100">
                                <span className="text-sm font-black uppercase tracking-widest text-slate-800">

                                </span>

                                <button
                                    onClick={closeMenu}
                                    className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <div className="px-6 py-8 space-y-2">
                                {navItems.map((item, index) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={closeMenu}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.08 + index * 0.06,
                                            duration: 0.35,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="group flex items-center justify-between px-4 py-4 rounded-2xl text-slate-700 font-bold hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                                    >
                                        <span>{item.label}</span>

                                        <span className="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all">
                                            →
                                        </span>
                                    </a>
                                ))}
                            </div>


                        </motion.div>
                    </>
                )
                }
            </AnimatePresence >
        </>
    );
}