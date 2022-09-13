import { prisma } from "../../database";
import { convertMinutesToHourString } from "../../utils/convert-minutes-to-hour-string";

export class ListAdsUseCase {
	async execute({ gameId }: Input): Promise<Output[]> {
		const game = await prisma.game.findUnique({
			where: {
				id: Number(gameId),
			},
			include: {
				ads: true,
			},
		});

		if (!game) {
			throw new Error("Game not found");
		}

		return game.ads.map((ad) => {
			return {
				name: ad.name,
				yearsPlayed: ad.yearsPlayed,
				weekDays: ad.weekDays.split(","),
				hoursStart: convertMinutesToHourString(ad.hoursStart),
				hoursEnd: convertMinutesToHourString(ad.hoursEnd),
				useVoiceChannel: ad.useVoiceChannel,
			};
		});
	}
}

type Input = {
	gameId: string;
};

type Output = {
	name: string;
	yearsPlayed: number;
	weekDays: string[];
	hoursStart: string;
	hoursEnd: string;
	useVoiceChannel: boolean;
};
