/** @type {import('stylelint').Configuration} */
const config = {
  extends: ["stylelint-config-standard", "stylelint-config-styled-components"],
  plugins: ["stylelint-order"],
  rules: {
    "declaration-empty-line-before": "never",
    "order/properties-alphabetical-order": true,
    "value-keyword-case": null,
  },
};
module.exports = config;
