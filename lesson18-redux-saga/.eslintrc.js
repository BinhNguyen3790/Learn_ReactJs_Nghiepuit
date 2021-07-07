module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    "eslint-config-prettier"
  ],
  rules: {
    semi: 1,
    'react/prop-types': 1,
    quotes: [2, 'double'],
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/require-default-props': 0,
    'react/state-in-constructor': 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'eol-last': 0,
    'lines-between-class-members': 0,
    'arrow-parens': 0,
    'no-unused-vars': 0,
    'object-curly-newline': 0,
    'import/order': 0,
    'react/prefer-stateless-function': 0,
    'import/no-useless-path-segments': 0,
    'react/prefer-stateless-function': 0,
    'arrow-body-style': 0,
    'max-len': 0,
    'import/prefer-default-export': 0,
    'prefer-const': 0,
    'import/newline-after-import': 0,
    'react/jsx-user-vars': 2,
    'prettier/prettier': ['error', {
      endOfLine: 'auto'
    }]
  },
  plugins: [
    "eslint-plugin-prettier"
  ],
  env: {
    "es6": true,
    "browser": true,
    "node": true
  }
};