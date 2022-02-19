import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import svgr from '@svgr/rollup'
import postcss from 'rollup-plugin-postcss'

import packageJson from './package.json'

export default {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({
      sourceMap: true,
      minimize: true,
      extract: false,
      modules: false,
    }),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true,
    }),
    image(),
    svgr(),
  ],
}
