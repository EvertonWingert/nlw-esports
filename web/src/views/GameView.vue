<script setup lang="ts">
import { ref } from "vue";
import AdCard from "@/components/AdCard.vue";
import { useGameStore } from "@/store/game";
import { computed } from "vue";

interface Props {
  id: string;
}

const props = defineProps<Props>();
const store = useGameStore();

const isLoading = ref(true);

const game = computed(() => store.currentGame);
const ads = computed(() => store.ads);

async function fetchData() {
  await store.fetchGame(Number(props.id));
  await store.fetchAds(Number(props.id));
  isLoading.value = false;
}

fetchData();
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
