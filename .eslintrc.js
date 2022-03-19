module.exports = {
  'extends': [
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  'settings': {
    'react': {
      'version': '999.999.999',
    },
    'plugins': ['simple-import-sort'],
    'rules': {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
};