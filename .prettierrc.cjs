module.exports = {
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  arrowParens: 'always',

  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('@trivago/prettier-plugin-sort-imports'),
  ],

  tailwindFunctions: ['clsx', 'cn'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
