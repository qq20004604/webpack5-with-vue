// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        vueFeatures: {
            filter: true,
            interpolationAsNonHTML: false,
        },
    },
    env: {
        browser: true,
        es6: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: [
        // 'plugin:vue/base',
        'plugin:vue/recommended',
    ],
    // required to lint *.vue files
    plugins: ['import', 'vue'],
    // add your custom rules here
    rules: {
        // https://cn.eslint.org/docs/rules/
        // allow paren-less arrow functions
        'for-direction': 2, // 禁止for无限循环
        'arrow-parens': 0,
        'getter-return': 2,
        'no-compare-neg-zero': 2,
        'no-constant-condition': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-func-assign': 2,
        'no-invalid-regexp': 2,
        'no-sparse-arrays': 2,
        'no-unreachable': 2,
        'accessor-pairs': 2,
        'array-callback-return': 2,
        'block-scoped-var': 2,
        'curly': 2,
        'eqeqeq': 2,
        'default-case': 2,
        'no-alert': 2,
        'no-eval': 2,
        'no-floating-decimal': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-return-assign': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-unused-expressions': 1,
        'no-unused-labels': 2,
        'no-useless-escape': 2,
        'no-useless-catch': 2,
        'no-with': 2,
        'require-await': 2,
        'vars-on-top': 2,
        'no-delete-var': 2,
        'no-unused-vars': 2,
        'array-bracket-spacing': [2, 'always'],
        'no-extra-semi': 2,
        'camelcase': [
            2,
            {
                'properties': 'always',
                'ignoreDestructuring': true,
                'allow': ['wti_type'],
            },
        ],
        'no-mixed-spaces-and-tabs': 2,
        'no-tabs': 2,
        'no-unneeded-ternary': 2,
        'quotes': [2, 'single'],
        'space-before-function-paren': [2, 'always'],
        'no-const-assign': 2,
        'no-this-before-super': 2,
        'no-var': 2,
        'prefer-arrow-callback': 2,
        'prefer-const': 1,

        'new-cap': 1,
        'semi': [2, 'always'],
        'semi-style': [2, 'last'],
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        indent: ['error', 4], // 缩进
        // https://eslint.vuejs.org/rules/
        'vue/html-indent': 'off',
        'vue/script-indent': ['error', 4, { 'baseIndent': 1 }],
        'vue/html-closing-bracket-spacing': [
            'error', {
                'endTag': 'never',
                'selfClosingTag': 'never',
            }],
        'vue/max-attributes-per-line': 0,
        'vue/attributes-order': 0,
        'vue/order-in-components': 0,
        // 'vue/max-attributes-per-line': ['error', {
        //     'singleline': 3,
        //     'multiline': {
        //         'max': 1,
        //         'allowFirstLine': true
        //     },
        //     'ignore': ['svg']
        // }],
        'vue/html-self-closing': [
            'error', {
                'html': {
                    'void': 'always',
                    'normal': 'never',
                    'component': 'always',
                },
                'svg': 'always',
                'math': 'always',
            }],
        'vue/html-closing-bracket-newline': [
            'error', {
                'singleline': 'never',
                'multiline': 'never',
            }],
        'vue/singleline-html-element-content-newline': 0,
    },
    'overrides': [
        {
            'files': ['*.vue'],
            'rules': {
                'indent': 'off',
            },
        },
    ],
};
