// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    // to edit target browsers: use "browserslist" field in package.json
    require('autoprefixer'),
  ],
};
