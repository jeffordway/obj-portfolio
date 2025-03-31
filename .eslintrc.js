module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disable the rule for unescaped entities completely
    'react/no-unescaped-entities': 'off',
    
    // Disable the warning about beforeInteractive scripts
    '@next/next/no-before-interactive-script-outside-document': 'off',
    
    // TypeScript related rules
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    
    // Other rules
    'prefer-rest-params': 'warn'
  }
};
