import React from 'react';

export default function Footer() {
    return (
        <footer className="py-8 text-center text-xs font-bold text-slate-400 border-t border-slate-200">
            © {new Date().getFullYear()} Fariha Siddiqui. All rights reserved.
        </footer>
    );
}