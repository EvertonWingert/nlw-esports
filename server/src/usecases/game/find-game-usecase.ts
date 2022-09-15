import { Game } from "@prisma/client";
import { prisma } from "../../database";

export class FindGameUseCase {
	async execute({ gameId }: Input): Promise<Game> {
		const game = await prisma.game.findFirst({
			where: {
				id: gameId,
			},
		});

		if (!game) {
			throw new Error("Game not found");
		}

		return game;
	}
}

type Input = {
	gameId: number;
};
