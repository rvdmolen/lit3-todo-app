import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rollupDevConfig = {
  aliasRollupPlugin: {
    entries: [
      {
        find: '@feat-to-do-list',
        replacement: path.resolve(__dirname, '../../src/routes/to-do-list'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, '../../src/components'),
      },
    ],
  },
};
