import { ref } from "vue";
import { defineStore } from "pinia";
import { GameService } from "@/services/game-service";
import type { Game } from "@/@types/game";

export const useGameStore = defineStore("game", () => {
  const gameService = new GameService();
  const games = ref<Game[]>([]);
  const isLoading = ref(false);

  async function fetchGames() {
    try {
      isLoading.value = true;
      games.value = await gameService.list();
    } catch (e) {
      alert('Falha ao buscar jogos')
    } finally {
      isLoading.value = false;
    }
  }

  return { games, fetchGames, isLoading };
});
