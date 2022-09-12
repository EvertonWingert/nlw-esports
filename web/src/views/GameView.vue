<script setup lang="ts">
interface Props {
  id: Number;
}

defineProps<Props>();
</script>

<template>
  <main>
    <h1>Jogo {{ id }}</h1>
  </main>
</template>
