/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["Mulish", "sans-serif"],
         },
         backgroundImage: (theme) => ({
            banner:
               "linear-gradient(to bottom, #150B2BBF, #150B2B33), url('/Banner.jpg')",
         }),
         gridTemplateColumns: {
            recipe: "48rem 1fr",
            preparing: "0.75rem 1fr repeat(2,0.5fr) 5.25rem",
            cooking: "0.75rem 1fr 0.5fr 0.6fr",
            "hero-buttons": "repeat(auto-fit, minmax(12.125rem,1fr))",
         },
         listStyleImage: {
            recipe: 'url("/Bullet.png")',
         },
      },
   },
   plugins: [],
};
