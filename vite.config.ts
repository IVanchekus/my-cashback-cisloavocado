import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // Capacitor ожидает файлы в public
    sourcemap: true,
  }
});
