import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-slate-900">Education</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                    <GraduationCap className="text-indigo-600 mb-3" size={28} />
                    <h3 className="font-bold text-slate-900 text-base">MPhil in Computer Science</h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">NFC Institute of Engineering and Technology, Multan</p>
                    <span className="inline-block mt-3 text-xs font-black text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">2023 – 2025</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                    <GraduationCap className="text-indigo-600 mb-3" size={28} />
                    <h3 className="font-bold text-slate-900 text-base">Bachelor's in Computer Science</h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">NFC Institute of Engineering and Technology, Multan</p>
                    <span className="inline-block mt-3 text-xs font-black text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">2019 – 2023</span>
                </div>
            </div>
        </section>
    );
}