/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        fade: "fade 400ms ease-in",
      },
      keyframes: {
        fade: {
          from: {
            opacity: 0,
            transform: "translateY(-16px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
