import { Response, Request } from "express";
import { FindGameUseCase } from "../usecases/game/find-game-usecase";
import { ListGamesUseCase } from "../usecases/game/list-usecase.ts";

export class GameController {
	async index(request: Request, response: Response) {
		const listGamesUseCase = new ListGamesUseCase();

		const games = await listGamesUseCase.execute();
		return response.status(200).json(games);
	}

	async show(request: Request, response: Response) {
		const { gameId } = request.params;

		const findGameUseCase = new FindGameUseCase();
		const game = await findGameUseCase.execute({ gameId: Number(gameId) });
		return response.status(200).json({ game });
	}
}
