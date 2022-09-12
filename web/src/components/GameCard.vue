<script setup lang="ts">
interface Props {
  name: string;
  image: string;
  ads: Number;
}
defineProps<Props>();
</script>
<template>
  <div class="relative rounded-lg overflow-hidden group">
    <img
      :src="image"
      :alt="`imagem do jogo ${name}`"
      class="bg-cover bg-no-repeat group-hover:scale-110 transition-all duration-300"
    />
    <div class="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
      <strong class="text-base font-bold block text-white">{{ name }}</strong>
      <span class="text-zinc-300 text-sm block mt-1">{{ ads }} anúncios</span>
    </div>
  </div>
</template>
