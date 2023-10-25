module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        complexity: ['error', 7],
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-unused-styles': 'error',
        'react-native/no-single-element-style-arrays': 'error',
        'max-lines': ['error', {max: 300, skipBlankLines: true}],
      },
    },
  ],
};
