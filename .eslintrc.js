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
    // fix: true,
    // extensions: ['js', 'vue'],
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: ['plugin:vue/base'],
    // required to lint *.vue files
    plugins: ['import', 'vue'],
    // add your custom rules here
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        indent: ['error', 4],
        'no-unused-vars': 0,
        semi: [0],
        quotes: [1, 'single'],
        'vue/html-indent': 'off'
    }
}
