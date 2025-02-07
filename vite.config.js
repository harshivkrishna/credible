import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      util: "rollup-plugin-node-polyfills/polyfills/util",
    },
  },
  build: {
    rollupOptions: {
      external: ["util"], // Ensure it does not bundle "util"
    },
  },
});
