// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        vueFeatures: {
            filter: true,
            interpolationAsNonHTML: false
        }
    },
    env: {
        browser: true,
        es6: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: [
        // 'plugin:vue/base',
        'plugin:vue/recommended'
    ],
    // required to lint *.vue files
    plugins: ['import', 'vue'],
    // add your custom rules here
    rules: {
        // allow paren-less arrow functions
        'for-direction': 2, // 禁止for无限循环
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // indent: ['error', 4],    // 缩进
        'no-unused-vars': 0,
        semi: [0],
        quotes: [1, 'single'],
        // https://eslint.vuejs.org/rules/
        'vue/html-indent': 'off',
        'vue/script-indent': ['error', 4, { 'baseIndent': 1 }],
        'vue/html-closing-bracket-spacing': ['error', {
            'endTag': 'never',
            'selfClosingTag': 'never'
        }],
        'vue/max-attributes-per-line': ['error', {
            'singleline': 3,
            'multiline': {
                'max': 1,
                'allowFirstLine': true
            }
        }],
        'vue/html-self-closing': ['error', {
            'html': {
                'void': 'always',
                'normal': 'always',
                'component': 'always'
            },
            'svg': 'always',
            'math': 'always'
        }],
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'never'
        }]
    }
}
