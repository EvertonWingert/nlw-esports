<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
</script>
<template>
  <Suspense>
    <MainLayout />
    <template #fallback>
      <span>Carregando...</span>
    </template>
  </Suspense>
</template>
