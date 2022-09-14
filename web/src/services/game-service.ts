export class GameService {
  constructor(
    private readonly baseUrl: string = import.meta.env.VITE_API_URL
  ) {}

  async list() {
    const response = await fetch(`${this.baseUrl}/games`);
    return await response.json();
  }

  async show(id: string) {
    const response = await fetch(`${this.baseUrl}/games/${id}`);
    return await response.json();
  }
}
