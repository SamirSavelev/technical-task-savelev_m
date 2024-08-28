import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src/app'),
      components: path.resolve(__dirname, './src/components'),
      data: path.resolve(__dirname, './src/data'),
      api: path.resolve(__dirname, './src/api'),
      assets: path.resolve(__dirname, './src/assets'),
      types: path.resolve(__dirname, './src/types'),
      lib: path.resolve(__dirname, './src/lib'),
      ['ui-kit']: path.resolve(__dirname, './src/ui-kit'),
    },
  },
});
