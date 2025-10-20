import { useLibraryConfig } from '@/composables/useLibraryConfig';
import { TS_UI_KEY, createLibraryConfig, type TouchStayUiConfig } from '@/plugin/ui-config';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { defineComponent, h } from 'vue';

const TestComponent = defineComponent({
  name: 'TestComponent',
  setup() {
    const cfg = useLibraryConfig();

    return { cfg };
  },
  render() {
    return h('div');
  },
});

describe('useLibraryConfig', () => {
  it('throws an error when plugin is not initialized (no provide)', () => {
    expect(() => mount(TestComponent)).toThrowError(
      '[@touch-stay/ui-library] Plugin is not initialized. Call app.use(TouchStayUi, {...}).',
    );
  });

  it('returns the provided configuration when plugin is initialized', () => {
    const provided: TouchStayUiConfig = createLibraryConfig({
      theme: {
        primary: '#000000',
      },
    });

    const wrapper = mount(TestComponent, {
      global: {
        provide: {
          [TS_UI_KEY as symbol]: provided,
        },
      },
    });

    const returned = (wrapper.vm as unknown as { cfg: TouchStayUiConfig }).cfg;

    expect(returned).toBe(provided);
    expect(returned.theme?.primary).toBe('#000000');
  });
});
