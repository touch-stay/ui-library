import pluginVitest from '@vitest/eslint-plugin';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import { globalIgnores } from 'eslint/config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import pluginOxlint from 'eslint-plugin-oxlint';

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
    rules: {
      'vitest/no-focused-tests': ['error', { fixable: false }],
    },
  },

  ...pluginOxlint.configs['flat/recommended'],
  skipFormatting,

  {
    rules: {
      'vue/multi-word-component-names': 'off',

      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
    },
  },
);
