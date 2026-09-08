import React from 'react';

export default function About() {
    return (
        <section className="px-6 md:px-12 -mt-10 relative z-10">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/60 px-8 py-10 md:px-14 md:py-14">
                <p className="text-lg md:text-xl leading-relaxed text-slate-700 text-center">
                    I&apos;m a Full Stack Flutter Developer with 3+ years of hands-on
                    experience crafting scalable mobile apps and backend systems for
                    startups and growing businesses. My toolkit spans Flutter, Node.js,
                    Firebase, Supabase, MongoDB, and MySQL, with deep experience in state
                    management using GetX, Provider, Riverpod, and BLoC. I handle the
                    full development cycle — from clean, pixel-perfect interfaces to
                    solid backend architecture and API design — including CI/CD setup
                    and App Store/Play Store deployment, so every release goes out
                    smoothly. My goal is simple: build fast, reliable apps that help
                    clients reach their goals sooner.
                </p>
            </div>
        </section>
    );
}