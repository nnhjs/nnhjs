import 'dotenv/config'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import swc from '@rollup/plugin-swc';
import sucrase from '@rollup/plugin-sucrase';

const env = process.env.NODE_ENV;

export default {
  input: 'main.jsx',
  output: {
    file: 'bundle.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts', '.jsx']
    }),
    replace({
      values: {
        'process.env.NODE_ENV': JSON.stringify(env)
      },
      preventAssignment: true
    }),
    commonjs(),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['typescript', 'jsx'],
    }),
    swc({
      swc: {
        jsc: {
          target: 'es2016',
          parser: {
            syntax: 'typescript'
          }
        },
        configFile: '.swcrc'
      }
    }),
    env === 'production' && terser(),
  ],
};
