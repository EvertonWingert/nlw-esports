<script setup lang="ts">
import { RouterLink } from "vue-router";
import GameCard from "@/components/GameCard.vue";
import { MagnifyingGlassCircleIcon } from "@heroicons/vue/24/outline";
import AppButton from "../components/AppButton.vue";

const GAMES = [
  {
    id: 1,
    name: "League of legends",
    ads: 14,
    image: "images/game1.png",
  },
  {
    id: 2,
    name: "Apex legends",
    ads: 4,
    image: "images/game2.png",
  },
  {
    id: 3,
    name: "CS:GO",
    ads: 12,
    image: "images/game3.png",
  },
  {
    id: 4,
    name: "World of Warcraft",
    ads: 0,
    image: "images/game4.png",
  },
  {
    id: 5,
    name: "Dota 2",
    ads: 2,
    image: "images/game5.png",
  },
  {
    id: 6,
    name: "Fortnite",
    ads: 5,
    image: "images/game6.png",
  },
];
</script>

<template>
  <main class="max-w-7xl mx-auto flex flex-col items-center">
    <img src="../assets/logo.svg" alt="NLW eSports logo" class="h-40" />
    <h1 class="text-6xl text-white font-black mt-20">
      Seu
      <span class="bg-nlw-radiant bg-clip-text text-transparent">duo</span> está
      aqui.
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
      <RouterLink
        v-for="game in GAMES"
        :key="game.id"
        :to="{ name: 'game', params: { id: game.id } }"
        class="relative rounded-lg overflow-hidden"
      >
        <GameCard :ads="game.ads" :name="game.name" :image="game.image" />
      </RouterLink>
    </div>

    <div
      class="pt-1 self-stretch bg-nlw-radiant rounded-lg overflow-hidden mt-8"
    >
      <div class="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong class="text-white font-black text-2xl block"
            >Não encontrou seu duo?</strong
          >
          <span class="text-base text-zinc-400"
            >Publique um anúncio para encontrar novos players!</span
          >
        </div>
        <AppButton>
          <MagnifyingGlassCircleIcon class="w-6 h-6 mr-3" />
          Publicar anúncio
        </AppButton>
      </div>
    </div>
  </main>
</template>
