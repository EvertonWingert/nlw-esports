<script setup lang="ts">
const VARIANTS = {
  primary: "bg-violet-500 hover:bg-violet-600 active:bg-violet-600",
  secondary: "bg-violet-100 hover:bg-gray-600 active:bg-gray-600",
};

function getVariant() {
  return VARIANTS.primary;
}

const css = `text-white inline-flex px-4 py-3 rounded active:scale-95 transition-all duration-300 ${getVariant()}`;
</script>
<template>
  <button :class="css">
    <slot />
  </button>
</template>
