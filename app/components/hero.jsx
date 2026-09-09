

'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const IconGlobe = dynamic(() => import('./iconGlobe'), {
    ssr: false,
    loading: () => <div className="w-full max-w-lg aspect-square" />,
});

export default function Hero() {
    return (
        <section id="home" className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12 pt-28 lg:pt-12">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

                {/* Left Side */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

                    {/* Greeting Tag */}
                    <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                        <span className="text-2xl">👋</span>
                        <div className="text-left">
                            <p className="text-xs text-slate-400 font-medium">
                                Hello, I am
                            </p>
                            <h1 className="text-3xl sm:text-2xl font-black text-slate-900">
                                Fariha Siddiqui
                            </h1>
                        </div>
                    </div>

                    {/* Role Tag */}
                    <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
                        <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">
                            Software Engineer
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">
                            Flutter Full Stack Developer
                        </p>
                    </div>

                    {/* Avatar with Floating Social Badges */}
                    <div className="relative mt-10">

                        {/* Profile Image */}
                        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-white shadow-xl border border-slate-100 p-4 flex items-center justify-center">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <img
                                    src="/Porfolio-Fariha/images/profile.jpg"
                                    alt="Fariha Siddiqui"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* LinkedIn Badge */}
                        <a
                            href="https://www.linkedin.com/in/fariha-siddiqui-740175199/"
                            target="_blank"
                            rel="noreferrer"
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-16 h-16 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            <img
                                src="/Porfolio-Fariha/images/linkedin.png"
                                alt="LinkedIn"
                                className="w-9 h-9 object-contain"
                            />
                        </a>

                        {/* GitHub Badge */}
                        <a
                            href="https://github.com/Farihasidd"
                            target="_blank"
                            rel="noreferrer"
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-16 h-16 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            <img
                                src="/Porfolio-Fariha/images/github.png"
                                alt="GitHub"
                                className="w-9 h-9 object-contain"
                            />
                        </a>

                    </div>
                </div>

                {/* Right Side: Interactive Icon Globe */}
                <div className="flex justify-center items-center -mt-4 sm:-mt-8 lg:mt-0 mx-auto w-full max-w-[360px] sm:max-w-md lg:max-w-lg lg:mx-0">
                    <IconGlobe />
                </div>

            </div>
        </section>
    );
}

