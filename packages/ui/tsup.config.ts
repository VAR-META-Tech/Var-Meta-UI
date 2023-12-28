import { defineConfig, type Options } from 'tsup';

const DIST_PATH = './dist';

export default defineConfig((options: Options) => ({
  treeshake: false,
  splitting: false,
  entry: ['src/**/*.tsx'],
  format: ['esm', 'cjs'],
  target: 'esnext',
  outDir: DIST_PATH,
  dts: true,
  minify: true,
  clean: !options.watch,
  external: ['react'],
  banner: {
    js: "'use client';",
  },
  ...options,
}));
