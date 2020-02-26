/** @type {import('@babel/core').TransformOptions} */
const config = ({ alias }) => ({
  env: {
    production: {
      plugins: ["react-remove-properties"],
    },
  },
  plugins: [
    [
      "module-resolver",
      {
        alias,
      },
    ],
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
});

module.exports = config;
