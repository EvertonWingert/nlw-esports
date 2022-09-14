<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Game } from "@/@types/game";
import { GameService } from "@/services/game-service";
interface Props {
  id: string;
}

const props = defineProps<Props>();

const gameService = new GameService();
const game = ref<Game | undefined>();
const isLoading = ref(false);

async function fetchGame(id: string) {
  isLoading.value = true;
  game.value = await gameService.show(id);
  isLoading.value = false;
}

onMounted(() => {
  fetchGame(props.id);
});
</script>

<template>
  <main>
    <h1 class="text-6xl text-white">{{ game?.title }}</h1>
  </main>
</template>
