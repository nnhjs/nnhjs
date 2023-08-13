import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';


export default {
  input: 'main.js',
  output: [{
    file: 'bundle.js',
    format: 'esm'
  },
  {
    file: 'bundle.min.js',
    format: 'iife',
    name: 'version',
    plugins: [terser()]
  }],
  plugins: [json()]
};
