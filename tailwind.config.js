/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html'],
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                primary: '#14b8a6',
                secondary: '#171717',
                huruf: '#ffffff',
            },
            screens: {
                '2xl': '1320px',
            },
        },
    },
    plugins: [],
}