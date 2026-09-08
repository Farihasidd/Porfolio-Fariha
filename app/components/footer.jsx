
import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full border-t border-slate-200 bg-[#eef3f8] py-8 text-center">
            <p className="text-sm font-semibold text-slate-600">
                © {new Date().getFullYear()}{' '}
                <span className="text-slate-800">
                    Fariha Siddiqui
                </span>
                . All rights reserved.
            </p>
        </footer>
    );
}

