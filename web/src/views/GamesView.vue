<script setup lang="ts">
import { RouterLink } from "vue-router";
import GameCard from "@/components/GameCard.vue";
import { useGameStore } from "@/store/game";
import { computed } from "vue";

const store = useGameStore();

const games = computed(() => store.games);
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center">
      <img src="../assets/logo.svg" alt="NLW eSports logo" class="h-40" />
      <h1 class="mt-20 text-6xl font-black text-white">
        Seu
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]"
          >duo</span
        >
        está aqui.
      </h1>
    </div>
    <div
      class="grid w-full grid-cols-1 gap-2 mt-8 md:grid-cols-3 lg:grid-cols-6"
    >
      <RouterLink
        v-for="game in games"
        :key="game.id"
        :to="{ name: 'game', params: { id: game.id } }"
        class="relative overflow-hidden rounded-lg"
      >
        <GameCard
          :adsCount="game._count.ads"
          :name="game.title"
          :image="game.bannerUrl"
        />
      </RouterLink>
    </div>
  </div>
</template>
