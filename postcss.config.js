const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [tailwindcss("./tailwind.config.js"), autoprefixer, cssnano],
};
