import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Surface system
                ink: {
                    950: '#05060A',
                    900: '#08090E',
                    800: '#0C0D14',
                    700: '#0F1117',
                    600: '#13161F',
                    500: '#1A1D2E',
                    400: '#252840',
                },
                // Accent — Indigo
                accent: {
                    50:  '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                },
                // Accent 2 — Cyan
                cyan: {
                    50:  '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                },
                // Accent 3 — Violet
                violet: {
                    50:  '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                },
                // Keep slate for text utilities
                slate: {
                    50:  '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                },
                emerald: {
                    400: '#34d399',
                    500: '#10b981',
                },
            },
            fontFamily: {
                outfit: ['var(--font-outfit)', 'sans-serif'],
                inter:  ['var(--font-inter)', 'sans-serif'],
                mono:   ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
            },
            animation: {
                'fade-in':       'fadeIn 0.5s ease-in-out',
                'slide-up':      'slideUp 0.6s cubic-bezier(0.22,1,0.36,1)',
                'slide-in-left': 'slideInLeft 0.6s cubic-bezier(0.22,1,0.36,1)',
                'slide-in-right':'slideInRight 0.6s cubic-bezier(0.22,1,0.36,1)',
                'pulse-slow':    'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
                'float':         'floatY 6s ease-in-out infinite',
                'ping-slow':     'pingSlow 2s cubic-bezier(0,0,0.2,1) infinite',
                'shimmer':       'shimmer 2.4s linear infinite',
                'glow-pulse':    'glowPulse 3s ease-in-out infinite',
                'aurora':        'aurora 8s ease infinite',
                'scan':          'scan 4s linear infinite',
                'border-spin':   'borderSpin 4s linear infinite',
                'gradient-x':    'gradientX 6s ease infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%':   { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%':   { transform: 'translateY(24px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)',    opacity: '1' },
                },
                slideInLeft: {
                    '0%':   { transform: 'translateX(-24px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)',      opacity: '1' },
                },
                slideInRight: {
                    '0%':   { transform: 'translateX(24px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)',     opacity: '1' },
                },
                floatY: {
                    '0%, 100%': { transform: 'translateY(0)'    },
                    '50%':      { transform: 'translateY(-12px)' },
                },
                pingSlow: {
                    '0%':      { transform: 'scale(1)',   opacity: '0.6' },
                    '75%,100%':{ transform: 'scale(2.2)', opacity: '0'   },
                },
                shimmer: {
                    '0%':   { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition:  '200% center' },
                },
                glowPulse: {
                    '0%,100%': { opacity: '0.4', transform: 'scale(1)'    },
                    '50%':     { opacity: '0.8', transform: 'scale(1.05)' },
                },
                aurora: {
                    '0%,100%': { backgroundPosition: '0% 50%'   },
                    '50%':     { backgroundPosition: '100% 50%' },
                },
                scan: {
                    '0%':   { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' },
                },
                borderSpin: {
                    '0%':   { '--border-angle': '0deg'   },
                    '100%': { '--border-angle': '360deg' },
                },
                gradientX: {
                    '0%,100%': { backgroundPosition: '0% 50%'   },
                    '50%':     { backgroundPosition: '100% 50%' },
                },
            },
            backgroundImage: {
                'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'noise':            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            },
            backdropBlur: {
                xs: '2px',
                '2xl': '40px',
                '3xl': '64px',
            },
            boxShadow: {
                'glow-sm':     '0 0 12px rgba(99,102,241,0.25)',
                'glow-md':     '0 0 24px rgba(99,102,241,0.3),  0 0 48px rgba(99,102,241,0.1)',
                'glow-lg':     '0 0 48px rgba(99,102,241,0.35), 0 0 96px rgba(99,102,241,0.12)',
                'glow-cyan':   '0 0 24px rgba(34,211,238,0.3),  0 0 48px rgba(34,211,238,0.1)',
                'glow-violet': '0 0 24px rgba(139,92,246,0.3),  0 0 48px rgba(139,92,246,0.1)',
                'card':        '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
                'card-dark':   '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
                'card-hover':  '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.2), 0 0 32px rgba(99,102,241,0.08)',
                'inner-glow':  'inset 0 0 20px rgba(99,102,241,0.05)',
            },
            transitionTimingFunction: {
                'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
                'expo':   'cubic-bezier(0.16, 1, 0.3, 1)',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
        },
    },
    plugins: [],
}

export default config
