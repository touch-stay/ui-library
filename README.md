# Touch Stay UI Library

A lightweight Vue 3 component library used across Touch Stay applications. It wraps unstyled PrimeVue components with Touch Stay design tokens and Tailwind-based styling so you can build consistent UIs quickly.

- Framework: Vue 3 (Composition API)
- Base components: PrimeVue (unstyled mode)
- Styling: Tailwind CSS v4 + design tokens
- TypeScript: fully typed with exported component and config types

## Requirements

This package is meant to be installed into an existing Vue 3 app.

Peer dependencies you need to have in your project:

- vue >= 3.3
- primevue >= 4
- primeicons >= 7 (optional, only if you plan to use Prime Icons)

Node.js: >=24.0.0

## Installation

Install the package and required peers:

```bash
# with npm
npm install @touch-stay/ui-library primevue primeicons

# with pnpm
pnpm add @touch-stay/ui-library primevue primeicons

# with yarn
yarn add @touch-stay/ui-library primevue primeicons
```

Add the UI plugin and the theme stylesheet in your app entry (e.g., main.ts):

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

// 1) Import the Touch Stay theme (includes Tailwind utilities and tokens)
import '@touch-stay/ui-library/theme';

// 2) Install the UI library plugin (optional but recommended)
import TouchStayUiLibrary, { type TouchStayUiOptions } from '@touch-stay/ui-library';

const app = createApp(App);

app.use(TouchStayUiLibrary, {
  // All options are optional; this is an example
  theme: {
    primary: '#12d332',
  },
} satisfies TouchStayUiOptions);

app.mount('#app');
```

If you prefer not to install the plugin, you can still import and use individual components directly (see below). The theme import is still recommended.

## Using components

You can import components either from the root entry or via subpath exports for better tree-shaking.

- Root entry:

```ts
import { TsButton, TsToolbar } from '@touch-stay/ui-library';
```

- Subpath (recommended for optimal bundling):

```ts
import { TsButton } from '@touch-stay/ui-library/button';
import { TsToolbar } from '@touch-stay/ui-library/toolbar';
```

Example usage in a SFC:

```vue
<script setup lang="ts">
  import { ref } from 'vue';
  import { TsButton } from '@touch-stay/ui-library/button';

  const isLoading = ref(false);
  const onClick = () => {
    isLoading.value = true;
    setTimeout(() => (isLoading.value = false), 1000);
  };
</script>

<template>
  <TsButton
    label="Save"
    :loading="isLoading"
    @click="onClick"
  />
</template>
```

## Theming and configuration

The plugin accepts TouchStayUiOptions to configure global behavior and tokens. You can also access the resolved configuration inside your app via the composable.

```ts
import TouchStayUiLibrary, { useLibraryConfig, type TouchStayUiOptions } from '@touch-stay/ui-library';

app.use(TouchStayUiLibrary, {
  theme: {
    // override tokens here
    primary: '#12d332',
    // add more tokens as they become available
  },
} satisfies TouchStayUiOptions);

// later in components/composables
const cfg = useLibraryConfig();
// cfg.theme.primary, etc.
```

Note: Components are built on top of PrimeVue in unstyled mode to allow full control via our theme. Ensure you imported `@touch-stay/ui-library/theme` once in your application.

## Icons

The library’s theme is compatible with Iconify utility classes and Prime Icons:

- Iconify utilities are enabled in the theme; you can use classes like `iconify-[material-symbols--battery-error-sharp]`.
- Prime Icons are optional. Install `primeicons` if you plan to use them.

## Available components (initial set)

- TsButton — wrapper around PrimeVue Button with Touch Stay styling and slots
- TsToolbar — a simple toolbar/header component

The list will grow over time. Check the package’s subpath exports for what’s currently available.

## Tree-shaking

This library provides subpath exports for components and marks CSS as side effects only. For best results, import components via their subpaths (e.g., `@touch-stay/ui-library/button`).

## TypeScript

All components and configuration types are exported. Useful exports:

- `TouchStayUiOptions` — plugin options shape
- `useLibraryConfig()` — composable to read the resolved config
- `TsButton`, `TsToolbar` component types

## Development (contributing locally)

This repository includes a small playground for development.

- Start the playground:

```bash
npm run dev
```

- Build the library:

```bash
npm run build
```

- Unit tests:

```bash
npm run test:unit
npm run test:unit:coverage
```

- Linting and formatting:

```bash
npm run lint
npm run format
```

The dev server uses `vite.config.dev.ts`. The library build uses `vite.config.ts` and generates outputs into `dist/`.

## FAQ

- Do I need Tailwind in my app? The published theme CSS includes required utilities and tokens for the components. Importing `@touch-stay/ui-library/theme` is sufficient; you do not need to set up Tailwind yourself to use the components.
- Do I need PrimeVue styles? Components use PrimeVue in unstyled mode, so no additional PrimeVue theme CSS is required.

## Versioning and releases

The package is versioned semantically (SemVer) and published to npm under `@touch-stay/ui-library`.

## License

MIT © Touch Stay

## Links

- Repository: https://github.com/touch-stay/ui-library
- Issues: https://github.com/touch-stay/ui-library/issues
