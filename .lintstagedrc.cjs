const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "**/*.(ts|tsx)": () => "npm run typecheck",
  "**/*.(ts|tsx|js)": (filenames) =>
    `npx prettier --write --list-different ${filenames.join(" ")}`,
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "**/*.(md|json)": (filenames) =>
    `npx prettier --write --list-different ${filenames.join(" ")}`,
};
