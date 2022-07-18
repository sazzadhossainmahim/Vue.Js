/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // backgroundImage: {
            //     'cold-bg': "url('../assets/cold-bg.jpg')",
            //     'warm-bg': "url('../assets/warm-bg.jpg')",
            // }
        },
    },
    plugins: [],
}