<script setup lang="ts">
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <input
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
    class="p-4 text-sm text-white rounded-lg bg-zinc-900 placeholder:text-zinc-500 focus:border-violet-500 focus:ring-violet-500"
  />
</template>
