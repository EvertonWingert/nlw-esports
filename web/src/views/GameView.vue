<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Game } from "@/@types/game";
import { GameService } from "@/services/game-service";
import { AdService } from "@/services/ad-service";
import type { Ad } from "@/@types/ad";
import AdCard from "@/components/AdCard.vue";

interface Props {
  id: number;
}

const props = defineProps<Props>();

const gameService = new GameService();
const adService = new AdService();
const game = ref<Game | undefined>();
const ads = ref<Ad[]>();
const isLoading = ref(true);

async function fetchGame(id: number) {
  const response = await gameService.show(id);
  game.value = response.game;
}
async function fetchAds(id: number) {
  const response = await adService.list(id);
  ads.value = response;
}

onMounted(() => {
  Promise.all([fetchGame(props.id), fetchAds(props.id)]).finally(() => {
    isLoading.value = false;
  });
});
</script>

<template>
  <div>
    <div class="flex flex-col">
      <div class="flex items-center gap-4">
        <img :src="game?.bannerUrl" class="rounded-lg" />
        <h3 class="text-6xl font-semibold text-white">{{ game?.title }}</h3>
      </div>

      <div>
        <div class="w-full max-h-[600px] overflow-y-auto">
          <div class="pt-5">
            <div
              v-if="!ads?.length"
              class="flex items-center justify-center bg-[#2A2634] py-5 rounded-lg"
            >
              <div class="flex flex-col px-4 py-4">
                <span class="text-white">Nenhum anuncio encontrado</span>
              </div>
            </div>
            <div
              v-else
              class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5"
            >
              <AdCard v-for="ad in ads" :key="ad.id" :ad="ad" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
