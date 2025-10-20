import type { ToolbarPassThroughOptions } from 'primevue';

export const TsToolbarPassThroughOptions = {
  // Used to pass attributes to the root's DOM element.
  root: {
    class: 'transition-all duration-200 focus:outline-none py-2 px-4',
  },

  // Used to pass attributes to the start's DOM element.
  start: {
    class: 'flex items-center gap-2',
  },

  // Used to pass attributes to the center's DOM element.
  center: {
    class: 'text-center',
  },

  // Used to pass attributes to the right's DOM element.
  end: {
    class: 'flex items-center gap-2',
  },

  // Used to manage all lifecycle hooks.
  hooks: {},
} satisfies ToolbarPassThroughOptions;
