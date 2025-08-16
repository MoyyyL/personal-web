// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
    // la config recomendada de @eslint/js
    js.configs.recommended,

    // tus ajustes personalizados
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
        },
        rules: {
            'no-unused-vars': 'warn',
        },
    },

    // prettier al final para desactivar reglas conflictivas
    eslintConfigPrettier,
]);
