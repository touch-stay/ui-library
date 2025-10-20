import type { TouchStayUiOptions } from '@/plugin/ui-config';
import { TS_UI_KEY, createLibraryConfig } from '@/plugin/ui-config';
import type { App } from 'vue';

import { TsButton } from '@/components/button';
import { TsToolbar } from '@/components/toolbar';

export { useLibraryConfig } from '@/composables/useLibraryConfig';
export type { TouchStayUiOptions };

/**
 * Global component exports
 */
export { TsButton, TsToolbar };

/**
 * Plugin for global configuration
 */
export default {
  install(app: App, options: TouchStayUiOptions = {}) {
    const cfg = createLibraryConfig(options);

    app.provide(TS_UI_KEY, cfg);
    app.config.globalProperties.$tsUi = cfg;
  },
};
