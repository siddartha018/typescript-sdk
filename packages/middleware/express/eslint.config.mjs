// @ts-check

import baseConfig from '@modelcontextprotocol/eslint-config';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [
    ...baseConfig,
    {
        settings: {
            'import/internal-regex': '^@modelcontextprotocol/server'
        }
    }
];
