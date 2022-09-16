import { ref } from "vue";
import { defineStore } from "pinia";
import { GameService } from "@/services/game-service";
import type { Game } from "@/@types/game";
import type { Ad } from "@/@types/ad";
import { AdService } from "@/services/ad-service";

export const useGameStore = defineStore("game", () => {
  const gameService = new GameService();
  const adService = new AdService();

  const games = ref<Game[]>([]);
  const currentGame = ref<Game>();
  const ads = ref<Ad[]>([])

  async function fetchGames() {
    games.value = await gameService.list();
  }

  async function fetchAds(id: number) {
    const response = await adService.list(id);
    ads.value = response;
  }

  async function fetchGame(id: number) {
    const response = await gameService.show(id);
    currentGame.value = response.game;
  }

  function incrementAd(gameId: number) {
    const game = games.value.find((game) => game.id === gameId);
    if (game) {
      game._count.ads += 1;
    }
  }

  function createAd(gameId: number, ad: Ad) {
    ads.value.push(ad);
    incrementAd(gameId);
  }

  return { games, fetchGames, currentGame, fetchGame, ads, fetchAds, createAd };
});
