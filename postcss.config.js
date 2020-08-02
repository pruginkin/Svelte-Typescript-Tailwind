// const tailwindcss = require("tailwindcss");
// const cssnano = require("cssnano");
// const autoprefixer = require("autoprefixer");

// module.exports = {
//   plugins: [tailwindcss("./tailwind.config.js"), autoprefixer, cssnano],
// };


const cssnano = require("cssnano")({ preset: "default" });
const tailwindcss = require("tailwindcss");
const autoprefixer = require('autoprefixer')({ overrideBrowserslist: ['last 2 versions'] });

const purgecss = require("@fullhuman/postcss-purgecss")({
    content: ["./src/**/*.svelte", "./src/**/*.html"],
    keyframes: true,
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const production = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
        tailwindcss, ...(production ? [purgecss, autoprefixer, cssnano] : []),
    ]
};