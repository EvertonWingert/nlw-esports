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
        v-for="game in GAMES"
        :key="game.id"
        :to="{ name: 'game', params: { id: game.id } }"
        class="relative overflow-hidden rounded-lg"
      >
        <GameCard :ads="game.ads" :name="game.name" :image="game.image" />
      </RouterLink>
    </div>

    <div
      class="w-full my-8 rounded-lg bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]"
    >
      <div
        class="flex flex-col md:flex-row w-full py-6 px-8 bg-[#2A2634] justify-between items-center text-white rounded-md text-base mt-1"
      >
        <div className="flex-grow flex flex-col">
          <strong class="text-2xl font-black text-white"
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
