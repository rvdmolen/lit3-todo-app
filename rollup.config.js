import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { copy } from '@web/rollup-plugin-copy';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import terser from '@rollup/plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import alias from '@rollup/plugin-alias';
import { rollupDevConfig } from './src/configuration/rollupConfig.js';

export default {
  input: 'index.html',
  output: {
    format: 'es',
    dir: 'dist',
  },
  plugins: [
    html({ minify: true }),

    /** Resolve bare module imports */
    nodeResolve(),

    /** Minify html and css tagged template literals */
    minifyHTML.default(),

    /* Print summary */
    summary(),

    /* Copy assets */
    copy({
      patterns: ['assets/**/*'],
    }),

    // Minify JS
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
    }),

    alias({
      entries: rollupDevConfig.aliasRollupPlugin.entries,
    }),

    babel({
      plugins: [['@babel/plugin-proposal-decorators', { version: '2023-05' }]],
    }),
  ],
  preserveEntrySignatures: 'strict',
};
