module.exports = {
    root: true,
    env: {
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
    ],
    rules: {
        'no-console':
            import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger':
            import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
};
