module.exports = {
  plugins: {
    "@tailwindcss/postcss": {
      tailwindConfig: "./tailwind.config.js" // Referencia explícita
    },
    autoprefixer: {}
  }
};