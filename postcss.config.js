const tailwind = require("tailwindcss");
const postcssImport = require("postcss-import");

const plugins =
  process.env.NODE_ENV === "production"
    ? [postcssImport, tailwind]
    : [postcssImport, tailwind];

module.exports = { plugins };
