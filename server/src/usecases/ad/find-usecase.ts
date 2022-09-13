import { Ad } from "@prisma/client";
import { prisma } from "../../database";

export class FindAdUseCase {
	async execute({ gameId, adId }: Input): Promise<Output> {
		const game = await prisma.game.findFirst({
			where: {
				id: gameId,
			},
		});

		if (!game) {
			throw new Error("Game not found");
		}

		const ad = await prisma.ad.findFirst({
			where: {
				id: adId,
			},
		});

		if (!ad) {
			throw new Error("Ad not found");
		}

		return ad;
	}
}
type Input = {
	gameId: number;
	adId: string;
};

type Output = Ad;
