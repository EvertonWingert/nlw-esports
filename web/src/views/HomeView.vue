<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

import GameCard from "@/components/GameCard.vue";
import CreateAdModal from "@/components/CreateAdModal.vue";
import CreateAdBanner from "@/components/CreateAdBanner.vue";

import { GameService } from "@/services/game-service";
import type { Game } from "@/@types/game";

const gameService = new GameService();
const games = ref<Game[]>([]);
const isLoading = ref(false);
const showCreateAdModal = ref(false);

async function fetchGames() {
  isLoading.value = true;
  games.value = await gameService.list();
  console.log(games.value);
  isLoading.value = false;
}

onMounted(() => {
  fetchGames();
});
</script>

<template>
  <main class="flex flex-col items-center mx-auto max-w-7xl">
    <img src="../assets/logo.svg" alt="NLW eSports logo" class="h-40" />
    <h1 class="mt-20 text-6xl font-black text-white">
      Seu
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]"
        >duo</span
      >
      está aqui.
    </h1>

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

    {{ showCreateAdModal }}
    <CreateAdBanner @create-ad="showCreateAdModal = true" />
    <CreateAdModal
      :isOpen="showCreateAdModal"
      @close="showCreateAdModal = false"
    />
  </main>
</template>
