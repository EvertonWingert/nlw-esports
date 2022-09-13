import { Response, Request } from "express";
import { ListGamesUseCase } from "../usecases/game/list-usecase.ts";

export class GameController {
	async index(request: Request, response: Response) {
		const listGamesUseCase = new ListGamesUseCase();

		const games = await listGamesUseCase.execute();
		return response.status(200).json(games);
	}
}
