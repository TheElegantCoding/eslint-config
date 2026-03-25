/* eslint-disable import/no-anonymous-default-export */
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  clean: true,
  minify: true
});