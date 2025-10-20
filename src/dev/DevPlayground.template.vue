<script setup lang="ts">
  import TsToolbar from '@/components/toolbar/TsToolbar.vue';
</script>

<template>
  <div class="flex h-screen flex-col">
    <ts-toolbar class="bg-primary shrink-0 p-4">
      <template #center>Touch Stay's Playground</template>
    </ts-toolbar>

    <main class="flex-1 overflow-y-auto bg-white p-4">Content</main>

    <ts-toolbar class="bg-ts-navy shrink-0 text-white">
      <template #center>
        {{ `Copyright © ${new Date().getFullYear()} Touch Stay` }}
      </template>
    </ts-toolbar>
  </div>
</template>

<style scoped></style>
