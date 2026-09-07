import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                <h2 className="text-3xl sm:text-4xl font-black mb-4">Let's Work Together</h2>
                <p className="text-slate-400 text-sm max-w-md mx-auto mb-8 font-medium">
                    Interested in building a mobile application or modernizing an existing codebase? Get in touch!
                </p>

                <a
                    href="mailto:farihasiddique50@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition shadow-lg"
                >
                    <Mail size={18} /> Send an Email
                </a>
            </div>
        </section>
    );
}