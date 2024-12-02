/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './app/**/*.{html,js,jsx}',
        './components/**/*.{html,js,jsx}',
        './sections/**/*.{html,js,jsx}',
        './styles/**/*.{js,jsx}',
        ],
        theme: {
            extend: {
                colors: {
                'DarkGunmetal': '#FF7F50',
                'ChineseSilver': '#323f5d',
                },
                transitionTimingFunction: {
                'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
                },
            },
        },
    plugins: [],
};