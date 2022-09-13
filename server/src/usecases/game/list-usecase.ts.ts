import { Game } from "@prisma/client";
import { prisma } from "../../database";

export class ListGamesUseCase {
	async execute(): Promise<Game[]> {
		const games = await prisma.game.findMany({
			include: {
				ads: true,
			},
		});

		return games;
	}
}
