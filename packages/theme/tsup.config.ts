import type { Options } from 'tsup';
import { defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  clean: true,
  dts: true,
  entry: ['index.ts'],
  external: ['react'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  splitting: true,
  target: 'esnext',
  treeshake: true,
  ...options,
}));
