/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your project
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1DA1F2",
        brandGreen: "#17BF63",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
      },
      screens:{
        s_phone: "320px", // Small Phones (320px and up) - Styles for screens 319px wide or wider
        m_phone: "375px", // Medium Phones (375px and up) - Styles for screens 374px wide or wider
        phone: "424px", // Standard Phones (430px and up) - Styles for screens 429px wide or wider
        tablet: "767px", // Tablets (768px and up) - Styles for screens 767px wide or wider
        laptop: "1023px", // Laptops (1024px and up) - Styles for screens 1023px wide or wider
        desktop: "1439px", // Desktops (1440px and up) - Styles for screens 1439px wide or wider
        _4k: "1919px", // 4K Monitors (1920px and up) - Styles for screens 1919px wide or wider
      }
    },
  },
  plugins: [],
}

