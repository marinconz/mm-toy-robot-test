// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     jest: true,
//   },
//   extends: [
//     // 'eslint:recommended',
//     // 'plugin:@typescript-eslint/recommended',
//     // 'plugin:react/recommended',
//     // 'plugin:prettier/recommended',
//     // 'prettier',
//     "prettier",
//   ],
//   overrides: [
//     {
//       env: {
//         node: true,
//       },
//       files: [".eslintrc.{js,cjs}"],
//       parserOptions: {
//         sourceType: "script",
//       },
//     },
//   ],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   plugins: ["@typescript-eslint", "react", "prettier"],
//   rules: {
//     "prettier/prettier": ["error"],
//   },
// };

module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
