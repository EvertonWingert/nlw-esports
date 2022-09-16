<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?: "primary" | "secondary";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});

const VARIANTS = {
  primary: "bg-violet-500 hover:bg-violet-600 active:bg-violet-600",
  secondary: "bg-zinc-500 hover:bg-zinc-700 active:bg-zinc-600",
};

const getVariant = computed(() => VARIANTS[props.variant]);

const css = computed(
  () =>
    `text-white inline-flex px-4 py-3 rounded active:scale-95 transition-all duration-300 disabled:opacity-50 ${getVariant.value}`
);
</script>
<template>
  <button :class="css">
    <slot />
  </button>
</template>
