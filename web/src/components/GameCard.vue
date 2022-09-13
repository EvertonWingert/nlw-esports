<script setup lang="ts">
interface Props {
  name: string;
  image: string;
  ads: Number;
}
defineProps<Props>();
</script>
<template>
  <div class="relative overflow-hidden rounded-lg group">
    <img
      :src="image"
      :alt="`imagem do jogo ${name}`"
      class="transition-all duration-300 bg-no-repeat bg-cover group-hover:scale-110"
    />
    <div
      class="absolute bottom-0 flex flex-col w-full px-4 pt-16 pb-4 bg-gradient-to-t from-black/95 to-black/0"
    >
      <strong class="font-bold text-white">{{ name }}</strong>
      <span class="text-sm text-zinc-300">{{ ads }} anúncios</span>
    </div>
  </div>
</template>
