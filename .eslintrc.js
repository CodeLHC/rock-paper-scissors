module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "eqeqeq": "error",
    "no-console": "warn",
    "prettier/prettier": "error"
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": "latest"
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "ignorePatterns": [
    "node_modules",
    "build",
    "dist",
    "public"
  ]
}