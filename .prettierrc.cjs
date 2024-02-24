module.exports = {
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  arrowParens: 'always',
  singleAttributePerLine: true,

  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-organize-attributes'),
    require.resolve('prettier-plugin-css-order'),
  ],

  tailwindFunctions: ['clsx', 'cn'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  attributeGroups: ['^class$', '^(id|name)$', '$DEFAULT', '^aria-'],
}
