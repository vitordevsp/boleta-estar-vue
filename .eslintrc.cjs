/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "quotes": ["warn", "double"],
    "semi": ["warn", "never"],
    "eol-last": ["warn", "always"],
    "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 0 }],
    "no-console": ["warn", { "allow": ["warn", "error"] }]
  }
}
