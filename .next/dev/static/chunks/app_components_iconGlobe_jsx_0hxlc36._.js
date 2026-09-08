(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/iconGlobe.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IconGlobe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icon$2d$cloud$2f$dist$2f$react$2d$icon$2d$cloud$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icon-cloud/dist/react-icon-cloud.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const iconSlugs = [
    // Mobile
    'flutter',
    'dart',
    'android',
    'apple',
    // Backend / Database
    'firebase',
    'mysql',
    'mongodb',
    'sqlite',
    'postgresql',
    'postman',
    'nodejs',
    'express',
    'prisma',
    'redis',
    // Frontend
    'react',
    'nextdotjs',
    'typescript',
    'javascript',
    'html5',
    'css3',
    'tailwindcss',
    'vuejs',
    'angular',
    // Tools
    'git',
    'github',
    'gitlab',
    'docker',
    'python',
    'wordpress',
    'stripe',
    'googlemaps',
    'figma',
    'jira',
    'vercel',
    'amazonaws',
    'kubernetes'
];
const ICON_COLOR = '#AEB6C2';
function IconGlobe() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IconGlobe.useEffect": ()=>{
            let mounted = true;
            async function loadIcons() {
                try {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icon$2d$cloud$2f$dist$2f$react$2d$icon$2d$cloud$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSimpleIcons"])({
                        slugs: iconSlugs
                    });
                    if (mounted) {
                        setData(result);
                    }
                } catch (error) {
                    console.error('Error loading icons:', error);
                }
            }
            loadIcons();
            return ({
                "IconGlobe.useEffect": ()=>{
                    mounted = false;
                }
            })["IconGlobe.useEffect"];
        }
    }["IconGlobe.useEffect"], []);
    const renderedIcons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IconGlobe.useMemo[renderedIcons]": ()=>{
            if (!data?.simpleIcons) {
                return null;
            }
            const icons = Object.values(data.simpleIcons).filter(Boolean);
            return icons.map({
                "IconGlobe.useMemo[renderedIcons]": (icon, index)=>{
                    try {
                        const sizes = [
                            34,
                            38,
                            42,
                            46,
                            50,
                            56
                        ];
                        const opacityValues = [
                            0.35,
                            0.42,
                            0.50,
                            0.58,
                            0.46,
                            0.38
                        ];
                        const size = sizes[index % sizes.length];
                        const opacity = opacityValues[index % opacityValues.length];
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icon$2d$cloud$2f$dist$2f$react$2d$icon$2d$cloud$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderSimpleIcon"])({
                            icon,
                            size,
                            bgHex: 'transparent',
                            fallbackHex: ICON_COLOR,
                            minContrastRatio: 0,
                            aProps: {
                                href: undefined,
                                tabIndex: -1,
                                onClick: {
                                    "IconGlobe.useMemo[renderedIcons]": (event)=>{
                                        event.preventDefault();
                                    }
                                }["IconGlobe.useMemo[renderedIcons]"],
                                onFocus: {
                                    "IconGlobe.useMemo[renderedIcons]": (event)=>{
                                        event.target.blur();
                                    }
                                }["IconGlobe.useMemo[renderedIcons]"],
                                style: {
                                    pointerEvents: 'none',
                                    outline: 'none',
                                    border: 'none',
                                    WebkitTapHighlightColor: 'transparent',
                                    filter: 'grayscale(100%)',
                                    opacity
                                }
                            }
                        });
                    } catch (error) {
                        console.warn('Could not render icon:', icon, error);
                        return null;
                    }
                }
            }["IconGlobe.useMemo[renderedIcons]"]).filter(Boolean);
        }
    }["IconGlobe.useMemo[renderedIcons]"], [
        data
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        className: "jsx-c9559d343b372540" + " " + "icon-globe-wrapper relative flex items-center justify-center w-full max-w-[650px] h-[600px] mx-auto overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "c9559d343b372540",
                children: ".icon-globe-wrapper{background:0 0}.icon-globe-wrapper canvas{border:none!important;outline:none!important}.icon-globe-wrapper a,.icon-globe-wrapper a:hover,.icon-globe-wrapper a:focus,.icon-globe-wrapper a:active,.icon-globe-wrapper a:focus-visible{box-shadow:none!important;-webkit-tap-highlight-color:transparent!important;border:none!important;outline:none!important}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icon$2d$cloud$2f$dist$2f$react$2d$icon$2d$cloud$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cloud"], {
                options: {
                    initial: [
                        0.08,
                        -0.08
                    ],
                    maxSpeed: isHovered ? 0.003 : 0.006,
                    minSpeed: isHovered ? 0.001 : 0.003,
                    decel: 0.96,
                    activeCursor: 'default',
                    tooltip: null,
                    outlineColour: '#0000',
                    outlineOffset: 0,
                    clickToFront: false,
                    dragControl: true,
                    dragVelocity: 0.35,
                    wheelZoom: false,
                    depth: 1.15,
                    imageScale: 2.2,
                    reverse: true
                },
                children: renderedIcons
            }, void 0, false, {
                fileName: "[project]/app/components/iconGlobe.jsx",
                lineNumber: 182,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/iconGlobe.jsx",
        lineNumber: 155,
        columnNumber: 9
    }, this);
}
_s(IconGlobe, "swbyh85Q86YqtCNtMVshkjulCNo=");
_c = IconGlobe;
var _c;
__turbopack_context__.k.register(_c, "IconGlobe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/iconGlobe.jsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/components/iconGlobe.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=app_components_iconGlobe_jsx_0hxlc36._.js.map