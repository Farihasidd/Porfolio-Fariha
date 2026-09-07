import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#eef3f8]/85 backdrop-blur-md border-b border-slate-200/60">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
                <a href="#" className="flex items-center">
                    <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
                </a>

                <div className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-wider text-slate-500 absolute left-1/2 -translate-x-1/2">
                    <a href="#about" className="hover:text-indigo-600 transition-colors">Home</a>
                    <a href="#about-me" className="hover:text-indigo-600 transition-colors">About</a>
                    <a href="#projects" className="hover:text-indigo-600 transition-colors">Work</a>
                    <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
                    <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
                </div>

                <button
                    className="md:hidden p-2 text-slate-700 hover:text-slate-900"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>

                {/* Spacer to balance flex layout on desktop since nav is absolutely centered */}
                <div className="hidden md:block w-10"></div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 font-semibold text-slate-700 shadow-xl">
                    <a href="#about" onClick={() => setIsMenuOpen(false)} className="block hover:text-indigo-600">Home</a>
                    <a href="#about-me" onClick={() => setIsMenuOpen(false)} className="block hover:text-indigo-600">About</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block hover:text-indigo-600">Work</a>
                    <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block hover:text-indigo-600">Skills</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-indigo-600">Contact</a>
                </div>
            )}
        </nav>
    );
}