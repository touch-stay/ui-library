<script setup lang="ts">
  import type { Emits, Props, Slots } from '@/components/toolbar/types.ts';
  import Toolbar from 'primevue/toolbar';
  import { TsToolbarPassThroughOptions } from './passThroughOptions.ts';

  defineProps</* @vue-ignore */ Props>();
  defineEmits</* @vue-ignore */ Emits>();
  defineSlots</* @vue-ignore */ Slots>();
</script>

<template>
  <Toolbar
    v-bind="$props"
    :unstyled="true"
    :pt="TsToolbarPassThroughOptions"
  >
    <template #start>
      <slot name="start" />
    </template>

    <template #center>
      <slot name="center" />
    </template>

    <template #end>
      <slot name="end" />
    </template>
  </Toolbar>
</template>

<style scoped></style>
