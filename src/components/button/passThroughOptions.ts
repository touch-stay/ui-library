import type { ButtonPassThroughOptions } from 'primevue/button';

export const TsButtonPassThroughOptions = {
  root: ({ props }) => ({
    class: [
      'inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-200 focus:outline-none py-1 px-4',
      'focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-ring',
      'hover:cursor-pointer',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      {
        'bg-primary text-white hover:bg-primary/90': props.severity === 'primary',
        'bg-surface text-foreground border border-gray-300 hover:bg-gray-100': props.severity === 'secondary',
        'bg-transparent text-primary border border-primary hover:bg-primary/10': props.link,
      },
    ],
  }),

  label: {
    class: 'text-sm font-semibold',
  },

  icon: {
    class: 'text-base',
  },
} satisfies ButtonPassThroughOptions;
