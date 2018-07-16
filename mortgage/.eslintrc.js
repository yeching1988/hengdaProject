// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'semi': 0,//分号检查
    'space-before-function-paren': 0,//函数参数前面要加空格
    'space-before-blocks': 0, //函数块前面要加空格
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // eslint-disable-line    
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    // eslint-disable-line
    
  }
}
