import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    libInjectCss(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      entryRoot: 'src',
      include: ['src/**/*.ts', 'src/**/*.vue'],
      cleanVueFileName: true,
      exclude: ['src/dev/**/*', 'src/scripts/**/*', 'src/dev', 'src/scripts', 'src/main.ts'],
    }),
    viteStaticCopy({
      targets: [
        {
          src: fileURLToPath(new URL('./src/theme', import.meta.url)),
          dest: 'assets',
        },
      ],
    }),
  ],
  build: {
    cssCodeSplit: true,
    copyPublicDir: false,
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      formats: ['es'],
      entry: {
        index: 'src/index.ts',
        button: 'src/components/button/index.ts',
        toolbar: 'src/components/toolbar/index.ts',
      },
    },
    rolldownOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'chunks/[name].[hash].js',
        entryFileNames: '[name].js',
        exports: 'named',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    open: true,
  },
});
