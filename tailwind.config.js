/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0A0A0F",
                primary: "#00B4D8",
                secondary: "#90E0EF",
                text: "#FFFFFF",
                card: "#0D1B2A",
                border: "#1C2E40",
            },
            fontFamily: {
                heading: ["'Space Grotesk'", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #00B4D8' },
                    '100%': { boxShadow: '0 0 20px #00B4D8' },
                }
            }
        },
    },
    plugins: [],
}
