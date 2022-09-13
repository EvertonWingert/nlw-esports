import { prisma } from "../../database";

export class FindAdDiscordUseCase {
	async execute({ gameId, adId }: Input): Promise<Output> {
		const game = await prisma.game.findFirst({
			where: {
				id: Number(gameId),
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

		return {
			discord: ad.discord,
		};
	}
}
type Input = {
	gameId: Number;
	adId: string;
};

type Output = {
	discord: string;
};
