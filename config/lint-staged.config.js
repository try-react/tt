const config = {
  "*.json": ["prettier --write"],
  "*.md": ["prettier --write"],
  "*.yml": ["prettier --write"],
  "*.{ts,tsx,js,jsx}": ["eslint --fix"],
  "*.{tsx}": ["stylelint --fix"],
};

module.exports = config;
