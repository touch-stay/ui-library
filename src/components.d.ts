import type { TsButton } from './components/button';
import type { TsToolbar } from './components/toolbar';

declare module 'vue' {
  export interface GlobalComponents {
    TsButton: typeof TsButton;
    TsToolbar: typeof TsToolbar;
  }
}
export {};
