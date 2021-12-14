import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Path from 'path'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    Vue(),
    Pages(),
    Components(),
  ],
})
