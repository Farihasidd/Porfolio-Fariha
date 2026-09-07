import React from 'react';
import { Globe, Database, Cpu, Smartphone } from 'lucide-react';
import {
    SiFlutter,
    SiDart,
    SiFirebase,
    SiStripe,
    SiSqlite,
    SiGooglemaps,
    SiWordpress,
    SiGit,
    SiGithub,
    SiAndroid,
    SiApple,
    SiMysql,
    SiMongodb
} from 'react-icons/si';

export const services = [
    {
        title: 'Full Stack Application Development',
        desc: 'Building scalable end-to-end web and mobile applications with clean architecture.',
        image: '/Porfolio-Fariha/images/fullstack-3d.png',
    },
    {
        title: 'Cross-Platform Mobile Applications',
        desc: 'High-performance iOS & Android mobile apps engineered with Flutter.',
        image: '/Porfolio-Fariha/images/mobile-3d.png',
    },
    {
        title: 'Backend API & Database Development',
        desc: 'Scalable REST APIs, Firebase backend services, and real-time database management.',
        image: '/Porfolio-Fariha/images/backend-3d.png',
    },
    {
        title: 'State Management & App Architecture',
        desc: 'Structured codebases built with GetX, BLoC, and Provider for maximum stability.',
        image: '/Porfolio-Fariha/images/architecture-3d.png',
    },
];

export const skills = [
    { name: 'Flutter', icon: <SiFlutter size={26} className="text-[#02569B]" /> },
    { name: 'Dart', icon: <SiDart size={26} className="text-[#0175C2]" /> },
    { name: 'iOS', icon: <SiApple size={26} className="text-slate-900" /> },
    { name: 'Android', icon: <SiAndroid size={26} className="text-[#3DDC84]" /> },
    { name: 'Firebase', icon: <SiFirebase size={26} className="text-[#FFCA28]" /> },
    { name: 'Git', icon: <SiGit size={26} className="text-[#F05032]" /> },
    { name: 'GitHub', icon: <SiGithub size={26} className="text-[#181717]" /> },
    { name: 'GetX', icon: <Smartphone size={26} className="text-indigo-600" /> },
    { name: 'BLoC Pattern', icon: <Database size={26} className="text-blue-600" /> },
    { name: 'Provider', icon: <Globe size={26} className="text-teal-600" /> },
    { name: 'Riverpod', icon: <Cpu size={26} className="text-cyan-600" /> },
    { name: 'REST APIs', icon: <Globe size={26} className="text-emerald-600" /> },
    { name: 'Stripe', icon: <SiStripe size={26} className="text-[#635BFF]" /> },
    { name: 'MySQL', icon: <SiMysql size={28} className="text-[#4479A1]" /> },
    { name: 'MongoDB', icon: <SiMongodb size={26} className="text-[#47A248]" /> },
    { name: 'SQLite', icon: <SiSqlite size={26} className="text-[#003B57]" /> },
    { name: 'Google Maps', icon: <SiGooglemaps size={26} className="text-[#4285F4]" /> },
    { name: 'WordPress', icon: <SiWordpress size={26} className="text-[#21759B]" /> }
];

export const experiences = [
    {
        role: 'Flutter Developer',
        company: 'Devconst',
        location: 'Islamabad, Pakistan',
        period: 'Jun 2024 - Present',
        desc: 'Delivered multiple production Flutter applications spanning ride-hailing, healthcare, fintech, and B2B marketplace domains with 100% client satisfaction. Translated complex Figma designs into clean, scalable Flutter codebases.',
        colorBg: 'bg-[#cbe896]/70 border-[#b2d972]',
        tagBg: 'bg-emerald-800 text-emerald-50',
        badgeLetter: 'D'
    },
    {
        role: 'Flutter Developer',
        company: 'AAM Tech Hub',
        location: 'Multan, Pakistan',
        period: 'Aug 2023 - Mar 2025',
        desc: 'Engineered AAM Express food ordering app from architecture through deployment. Built a reusable, modular Flutter base project adopted across multiple teams, improving overall efficiency by 30%.',
        colorBg: 'bg-[#f4d19b]/70 border-[#e3b879]',
        tagBg: 'bg-amber-900 text-amber-50',
        badgeLetter: 'A'
    },
    {
        role: 'Flutter Developer',
        company: 'ProTech',
        location: 'Multan, Pakistan',
        period: 'Sep 2022 - Dec 2022',
        desc: 'Modernized legacy codebases to current Flutter development standards, cutting operating costs while improving responsiveness and cross-device fidelity.',
        colorBg: 'bg-[#f8c4ce]/70 border-[#f1a4b3]',
        tagBg: 'bg-rose-900 text-rose-50',
        badgeLetter: 'P'
    }
];

export const projects = [
    {
        title: 'Matloob',
        category: 'E-Commerce & B2B',
        desc: 'Smart B2B marketplace where buyers post RFQs and suppliers list products with intelligent keyword matching.',
        link: 'https://apps.apple.com/pk/app/%D9%85%D8%B7%D9%8D%D9%84%D9%88%D8%A8-%D8%B7%D8%A8%D9%8A-mtloob/id6753684200',
        badge: 'B2B Platform',
        'image': '/Porfolio-Fariha/images/matloob.png'
    },
    {
        title: 'Decotec Raumvisualisierer',
        category: 'Mobile Apps',
        desc: 'AR room-visualization app for a German flooring company: scans rooms, detects furniture, and renders new flooring realistically in real-time.',
        link: 'https://apps.apple.com/si/app/decotec-raumvisualisierer/id1553271609',
        badge: 'AR Experience',
        'image': '/Porfolio-Fariha/images/decotec.png'
    },
    {
        title: 'Oncolight',
        category: 'Health & Telehealth',
        desc: 'Telehealth app enabling patients to submit consultations online and physicians to respond securely with professional advice and treatment recommendations.',
        link: null,
        badge: 'Digital Healthcare',
        'image': '/Porfolio-Fariha/images/oncolight.png'
    },
    {
        title: 'Biteffect',
        category: 'Health & Telehealth',
        desc: 'Food-scanning app that lets users scan barcodes to instantly view calories, sugar, salt, and nutritional content.',
        link: 'https://apps.apple.com/us/app/biteffect/id6754243490',
        badge: 'Nutrition Tech',
        'image': '/Porfolio-Fariha/images/biteffect.png'
    },
    {
        title: 'HobbyMate',
        category: 'E-Commerce & B2B',
        desc: 'Hobby community hub where users discover groups, chat with nearby hobbyists, book workshops, and trade gear in a built-in marketplace.',
        link: 'https://apps.apple.com/us/app/hobbymate/id6749037434',
        badge: 'Community & Market',
        'image': '/Porfolio-Fariha/images/hobbymate.png'
    },
    {
        title: 'Askadoc Telemedicine',
        category: 'Health & Telehealth',
        desc: 'Appointment-booking telemedicine platform connecting doctors and patients for online video and chat consultations.',
        link: 'https://play.google.com/store/apps/details?id=com.askadoc.app&hl=en',
        badge: 'Telemedicine',
        'image': '/Porfolio-Fariha/images/askadoc.png'
    },
    {
        title: 'Nail Connect',
        category: 'On-Demand & Services',
        desc: 'On-demand salon staffing marketplace where salons post shifts and professionals apply and clock in/out with Stripe payments.',
        link: null,
        badge: 'On-Demand Staffing',
        'image': '/Porfolio-Fariha/images/nailconnect.png'
    },
    {
        title: 'Astra Labs Loyalty',
        category: 'E-Commerce & B2B',
        desc: 'Customer loyalty app enabling registered users to track reward points based on purchases, fully synced with an internal CRM.',
        link: 'https://apps.apple.com/us/app/astra-labs/id6745259234',
        badge: 'Loyalty & CRM',
        'image': '/Porfolio-Fariha/images/astralabs.png'
    },
    {
        title: 'Healink Habit Tracking',
        category: 'Health & Telehealth',
        desc: 'Habit tracking app that lets users build routines, log daily progress, earn achievements, and view weekly score summaries.',
        link: 'https://play.google.com/store/apps/details?id=com.healink.app',
        badge: 'Wellness',
        'image': '/Porfolio-Fariha/images/healink.png'
    },
    {
        title: 'Athenos Gym & Fitness',
        category: 'Health & Telehealth',
        desc: 'Gym companion app offering custom workout plans, 1RM calculator, RPE chart, and warmup planner.',
        link: 'https://apps.apple.com/us/app/athenos-gvm-fitness-workout/id6745703053',
        badge: 'Fitness',
        'image': '/Porfolio-Fariha/images/athenos.png'
    },
    {
        title: 'Rentify',
        category: 'E-Commerce & B2B',
        desc: 'Two-sided product rental marketplace serving renters and rentees with secure Stripe payments.',
        link: 'https://apps.apple.com/pk/app/rentify-rent-earn/id6742651750',
        badge: 'Rental Market',
        'image': '/Porfolio-Fariha/images/rentify.png'
    },
    {
        title: 'OGA (On Good Authority)',
        category: 'Mobile Apps',
        desc: 'Social recommendation app replacing scattered links by letting users save and share curated lists with friends.',
        link: 'https://apps.apple.com/pk/app/oga-i-on-good-authority/id6739505173',
        badge: 'Social',
        'image': '/Porfolio-Fariha/images/oga.png'
    },
    {
        title: 'Aquame Wellness & Finance',
        category: 'Health & Telehealth',
        desc: 'Holistic wellness app helping users manage finances, physical health, and mental well-being in a single dashboard.',
        link: null,
        badge: 'Holistic Tech',
        'image': '/Porfolio-Fariha/images/aquame.png'
    },
    {
        title: 'Lahakni User & Driver',
        category: 'On-Demand & Services',
        desc: 'Dual-sided ride-hailing suite with real-time location mapping, driver earnings tracking, fare calculation, and push notifications.',
        link: null,
        badge: 'Ride Hailing',
        'image': '/Porfolio-Fariha/images/lahakni.png'
    },
    {
        title: 'Restaurant POS System',
        category: 'E-Commerce & B2B',
        desc: 'Point-of-sale system for restaurants to manage menus, process active orders, print bills, and track daily sales analytics.',
        link: null,
        badge: 'POS Solution',
        'image': '/Porfolio-Fariha/images/pos.png'
    },
    {
        title: 'iGetSporty',
        category: 'On-Demand & Services',
        desc: 'Sports venue booking platform for organizing local matches and reserving fields across various sports.',
        link: null,
        badge: 'Sports Booking',
        'image': '/Porfolio-Fariha/images/igetsporty.png'
    },
    {
        title: 'Muslimeen',
        category: 'Mobile Apps',
        desc: 'Comprehensive Quran and lifestyle app built for everyday reading, offline reference, and spiritual routine tracking.',
        link: null,
        badge: 'Lifestyle',
        'image': '/Porfolio-Fariha/images/muslimeen.png'
    }
];

export const projectCategories = ['All', 'Mobile Apps', 'E-Commerce & B2B', 'Health & Telehealth', 'On-Demand & Services'];