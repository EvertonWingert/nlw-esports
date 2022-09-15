import type { Ad } from "@/@types/ad";

export class AdService {
  constructor(
    private readonly baseUrl: string = import.meta.env.VITE_API_URL
  ) {}

  async list(gameId: number) {
    const response = await fetch(`${this.baseUrl}/games/${gameId}/ads`);
    return await response.json();
  }

  async create(gameId: number, ad: Omit<Ad, "id">) {
    const response = await fetch(`${this.baseUrl}/games/${gameId}/ads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ad),
    });
    return await response.json();
  }
}
