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
            fontFamily: {
                outfit: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
                inter:  ['var(--font-inter)',  'Inter',  'sans-serif'],
                mono:   ['var(--font-mono)',   'JetBrains Mono', 'monospace'],
            },
            colors: {
                // Brand accent — violet/purple
                brand: {
                    50:  '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#7c3aed',
                    600: '#6d28d9',
                    700: '#5b21b6',
                    800: '#4c1d95',
                    900: '#3b0764',
                },
                // Surface / background system
                surface: {
                    50:  '#fafaff',
                    100: '#f2f2fa',
                    200: '#e8e8f5',
                    700: '#111226',
                    800: '#0d0e1f',
                    900: '#08091a',
                    950: '#05060f',
                },
            },
            animation: {
                'float':      'floatY 6s ease-in-out infinite',
                'ping-slow':  'pingSlow 2.5s cubic-bezier(0,0,0.2,1) infinite',
                'shimmer':    'shimmerMove 2.4s linear infinite',
                'gradient':   'gradientShift 8s ease infinite',
                'slide-up':   'slideUp 0.5s cubic-bezier(0.22,1,0.36,1)',
                'fade-in':    'fadeIn 0.4s ease-out',
                'glow-pulse': 'glowPulse 3s ease-in-out infinite',
            },
            keyframes: {
                floatY: {
                    '0%,100%': { transform: 'translateY(0)' },
                    '50%':     { transform: 'translateY(-12px)' },
                },
                pingSlow: {
                    '0%':       { transform: 'scale(1)',   opacity: '0.6' },
                    '75%,100%': { transform: 'scale(2.2)', opacity: '0'   },
                },
                shimmerMove: {
                    '0%':   { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition:  '200% center' },
                },
                gradientShift: {
                    '0%,100%': { backgroundPosition: '0% 50%'   },
                    '50%':     { backgroundPosition: '100% 50%' },
                },
                slideUp: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to:   { opacity: '1', transform: 'translateY(0)'    },
                },
                fadeIn: {
                    from: { opacity: '0' },
                    to:   { opacity: '1' },
                },
                glowPulse: {
                    '0%,100%': { opacity: '0.4', transform: 'scale(1)'    },
                    '50%':     { opacity: '0.8', transform: 'scale(1.05)' },
                },
            },
            boxShadow: {
                'glow-sm':    '0 0 15px rgba(124,58,237,0.25)',
                'glow-md':    '0 0 30px rgba(124,58,237,0.3), 0 0 60px rgba(124,58,237,0.1)',
                'glow-lg':    '0 0 60px rgba(124,58,237,0.3), 0 0 120px rgba(124,58,237,0.1)',
                'card':       '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
                'card-hover': '0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(124,58,237,0.12)',
                'card-dark':  '0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(124,58,237,0.15), 0 0 40px rgba(124,58,237,0.06)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            transitionTimingFunction: {
                'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
                'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            },
        },
    },
    plugins: [],
}

export default config
