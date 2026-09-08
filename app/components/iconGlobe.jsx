'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';

// Expanded list of tech icons matching your stack
const iconSlugs = [
    // Mobile & Core
    'flutter',
    'dart',
    'kotlin',
    'swift',
    'android',
    'apple',
    'ios',

    // Backend, Databases & APIs
    'firebase',
    'nodedotjs',
    'express',
    'mysql',
    'mongodb',
    'sqlite',
    'postgresql',
    'redis',
    'graphql',
    'postman',

    // Frontend & Web
    'react',
    'nextdotjs',
    'redux',
    'typescript',
    'javascript',
    'html5',
    'css3',
    'tailwindcss',
    'sass',
    'vuedotjs',

    // Tools & DevOps
    'git',
    'github',
    'gitlab',
    'docker',
    'kubernetes',
    'nginx',
    'linux',
    'amazonaws',
    'googlecloud',
    'vercel',
    'netlify',
    'cisco',
    'python',
    'wordpress',
    'stripe',
    'googlemaps',
    'figma',
    'visualstudiocode',
    'npm',
    'yarn',
    'jira',
    'slack',
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
                size: 42, // Bumped up slightly to match the larger cloud
                aProps: {
                    href: undefined,
                    onClick: (e) => e.preventDefault(),
                    tabIndex: -1,
                    style: {
                        pointerEvents: 'none',
                        outline: 'none',
                        border: 'none',
                        boxShadow: 'none',
                        background: 'transparent',
                        textDecoration: 'none',
                    },
                },
            })
        );
    }, [data]);

    return (
        <div
            className="relative flex items-center justify-center overflow-hidden w-full max-w-3xl mx-auto rounded-full"
            style={{ minHeight: '600px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Cloud
                options={{
                    // Fluid rotation dynamics
                    initial: [0.03, -0.03],
                    maxSpeed: isHovered ? 0.03 : 0.08, // Slows down when hovering anywhere inside the container
                    minSpeed: isHovered ? 0.02 : 0.05,
                    decel: 0.98,

                    // Clean visual rendering (No outlines or tooltips)
                    activeCursor: 'default',
                    tooltip: null,
                    outlineColour: 'transparent',
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