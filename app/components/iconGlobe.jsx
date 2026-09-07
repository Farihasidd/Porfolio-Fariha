'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';

// Expanded list of tech icons matching your stack
const iconSlugs = [
    // Mobile & Core
    'flutter',
    'dart',
    'android',
    'apple',
    'ios',

    // Backend, Databases & APIs
    'firebase',
    'mysql',
    'mongodb',
    'sqlite',
    'postgresql',
    'postman',

    // Frontend & Web
    'react',
    'nextdotjs',
    'typescript',
    'javascript',
    'html5',
    'css3',
    'tailwindcss',

    // Tools & DevOps
    'git',
    'github',
    'docker',
    'cisco',
    'python',
    'wordpress',
    'stripe',
    'googlemaps',
    'figma'
];

export default function IconGlobe() {
    const [data, setData] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }, []);

    const renderedIcons = useMemo(() => {
        if (!data) return null;
        return Object.values(data.simpleIcons).map((icon) =>
            renderSimpleIcon({
                icon,
                size: 38, // Slightly reduced size to fit more icons cleanly
                aProps: {
                    href: undefined,
                    onClick: (e) => e.preventDefault(),
                    style: {
                        pointerEvents: 'none', // Prevents clicks and browser focus
                        outline: 'none',        // Removes any default focus outlines
                    },
                },
            })
        );
    }, [data]);

    return (
        <div
            className="relative flex items-center justify-center overflow-hidden w-full max-w-lg mx-auto rounded-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Cloud
                options={{
                    // Fluid rotation dynamics
                    initial: [0.03, -0.03],
                    maxSpeed: isHovered ? 0.02 : 0.06, // Slows down when hovering anywhere inside the container
                    minSpeed: isHovered ? 0.01 : 0.03,
                    decel: 0.98,

                    // Clean visual rendering (No outlines or tooltips)
                    activeCursor: 'default',
                    tooltip: null,
                    outlineColour: '0000',
                    outlineOffset: 0,
                    clickToFront: false,

                    // Interactions
                    dragControl: true,
                    dragVelocity: 1,
                    wheelZoom: false,
                    depth: 0.85,
                    imageScale: 2,
                    reverse: true,
                }}
            >
                {renderedIcons}
            </Cloud>
        </div>
    );
}