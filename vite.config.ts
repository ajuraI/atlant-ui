import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import macrosPlugin from 'vite-plugin-babel-macros';
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), macrosPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
  }
})
