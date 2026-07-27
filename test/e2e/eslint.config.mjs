// @ts-check

import baseConfig from '@modelcontextprotocol/eslint-config';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [
    ...baseConfig,
    {
        rules: {
            // `await using _ = await wire(...)` holds the connection open for the test body; the binding is intentionally unused
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_$' }],
            // scenario files keep the kebab-case names they share with the v1.x suite
            'unicorn/filename-case': ['error', { cases: { camelCase: true, kebabCase: true } }]
        }
    }
];
