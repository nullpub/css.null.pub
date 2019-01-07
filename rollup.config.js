import css from '@modular-css/rollup';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import html from 'rollup-plugin-fill-html';

export default {
  input: './src/index.tsx',
  plugins: [
    typescript(),
    resolve(),
    uglify(),
    html({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  output: {
    file: './dist/bundle.js',
    format: 'iife',
  },
};
