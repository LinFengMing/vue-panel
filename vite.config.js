import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Path from 'path'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

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
    Components({
      resolvers: [
        IconsResolver({
          prefix: false,
          enabledCollections: ['heroicons-outline'],
        }),
        HeadlessUiResolver(),
      ]
    }),
    Icons(),
  ],
})
