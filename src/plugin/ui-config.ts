import type { InjectionKey } from 'vue';

export type TouchStayUiOptions = {
  theme?: {
    primary?: string;
    primaryText?: string;
    primaryBorder?: string;
    secondary?: string;
    secondaryText?: string;
    secondaryBorder?: string;
  };
};

export type TouchStayUiConfig = TouchStayUiOptions;

export const TS_UI_KEY: InjectionKey<TouchStayUiConfig> = Symbol('TS_UI_CONFIG');

const DEFAULTS: TouchStayUiConfig = {
  theme: {
    primary: '#3ed9cc',
    primaryText: '#1a293a',
    primaryBorder: '#e1e1e1',
    secondary: '#f7fafc',
    secondaryText: '#848789',
    secondaryBorder: '#e1e1e1',
  },
};

export function createLibraryConfig(options: TouchStayUiOptions = {}): TouchStayUiConfig {
  return {
    ...DEFAULTS,
    ...options,
    theme: {
      ...DEFAULTS.theme,
      ...options.theme,
    },
  };
}
