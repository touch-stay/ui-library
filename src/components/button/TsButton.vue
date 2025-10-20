<script setup lang="ts">
  import { TsButtonPassThroughOptions } from '@/components/button/passThroughOptions.ts';
  import type { Emits, Props, Slots } from '@/components/button/types.ts';
  import Button from 'primevue/button';
  import { computed, useAttrs } from 'vue';

  defineOptions({ inheritAttrs: false });

  const props = defineProps</* @vue-ignore */ Props>();
  defineEmits</* @vue-ignore */ Emits>();
  defineSlots</* @vue-ignore */ Slots>();

  const attrs = useAttrs();

  const passThrough = computed(() => ({
    ...props,
    ...attrs,
  }));
</script>

<template>
  <Button
    v-bind="passThrough"
    :unstyled="true"
    :pt="TsButtonPassThroughOptions"
  >
    <template #default="slotProps">
      <slot
        name="default"
        v-bind="slotProps"
      />
    </template>

    <template #icon="slotProps">
      <slot
        name="icon"
        v-bind="slotProps"
      />
    </template>

    <template #loadingicon="slotProps">
      <slot
        name="loadingicon"
        v-bind="slotProps"
      />
    </template>
  </Button>
</template>

<style scoped></style>
