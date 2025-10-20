import { TS_UI_KEY, type TouchStayUiConfig } from '@/plugin/ui-config';
import { inject } from 'vue';

export function useLibraryConfig(): TouchStayUiConfig {
  const cfg = inject(TS_UI_KEY);

  if (!cfg) {
    throw new Error('[@touch-stay/ui-library] Plugin is not initialized. Call app.use(TouchStayUi, {...}).');
  }

  return cfg;
}
