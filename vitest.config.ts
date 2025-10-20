import { fileURLToPath } from 'node:url';
import { configDefaults, coverageConfigDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: ['./vitest.setup.ts'],
      coverage: {
        provider: 'v8',
        reporter: ['cobertura', 'html', 'text'],
        include: ['src/**/*'],
        exclude: [...coverageConfigDefaults.exclude],
      },
    },
  }),
);
