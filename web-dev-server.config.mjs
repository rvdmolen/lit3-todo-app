import { fromRollup } from '@web/dev-server-rollup';
import rollupBabel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import { rollupDevConfig } from './src/configuration/rollupConfig.js';

const babel = fromRollup(rollupBabel);
const aliasRollupPlugin = fromRollup(alias);

export default {
  basePath: '/',
  appIndex: './index.html',
  open: '/',
  watch: true,
  nodeResolve: true,

  plugins: [
    babel({
      include: ['**/*.js'],
      babelHelpers: 'bundled',
    }),
    aliasRollupPlugin({
      entries: rollupDevConfig.aliasRollupPlugin.entries
    }),
  ],
};
