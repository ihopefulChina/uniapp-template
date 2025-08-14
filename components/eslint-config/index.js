module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // jQuery: false,
    // $: false
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'object-shorthand': ['error', 'always'],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'prefer-rest-params': 'error',
    'prefer-arrow-callback': 'error',
    'no-unneeded-ternary': 'error',
    'nonblock-statement-body-position': 'error',
    'brace-style': 'error',
    'no-else-return': 'error',
    'padded-blocks': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'id-length': ['error', { properties: 'never', exceptionPatterns: ['_'] }],
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message: '使用 Number.isFinite 代替全局的 isFinite'
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'max-lines': ['error', 500],
    'no-console': 'warn',
    'no-invalid-this': 0,
    'no-return-assign': 0,
    'lines-between-class-members': [2],
    'react/self-closing-comp': 'error',
    'no-unused-expressions': 0,
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/no-empty-interface': 0, // 不检测空interface
    '@typescript-eslint/prefer-function-type': [0],
    '@typescript-eslint/method-signature-style': [0],
    /**
     * 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
     * @reason <Type> 容易被理解为 jsx
     * @override eslint-config-alloy
     */
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow'
      }
    ]
  }
}
