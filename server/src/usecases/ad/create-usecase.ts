import { Ad } from "@prisma/client";
import { prisma } from "../../database";
import { convertHoursStringToMinutes } from "../../utils/convert-hours-string-to-minutes";
import { convertMinutesToHourString } from "../../utils/convert-minutes-to-hour-string";

export class CreateAdUseCase {
	async execute({
		gameId,
		name,
		yearsPlayed,
		discord,
		weekDays,
		hoursStart,
		hoursEnd,
		useVoiceChannel,
	}: Input): Promise<Output> {
		const game = await prisma.game.findFirst({
			where: {
				id: Number(gameId),
			},
		});
		if (!game) {
			throw new Error("Game not found");
		}

		const ad = await prisma.ad.create({
			data: {
				name: name,
				yearsPlayed: yearsPlayed,
				discord: discord,
				weekDays: weekDays,
				hoursStart: convertHoursStringToMinutes(hoursStart),
				hoursEnd: convertHoursStringToMinutes(hoursEnd),
				useVoiceChannel: useVoiceChannel,
				game: {
					connect: {
						id: Number(gameId),
					},
				},
			},
		});

		return {
			name: ad.name,
			yearsPlayed: ad.yearsPlayed,
			weekDays: ad.weekDays.split(","),
			hoursStart: convertMinutesToHourString(ad.hoursStart),
			hoursEnd: convertMinutesToHourString(ad.hoursEnd),
			useVoiceChannel: ad.useVoiceChannel,
		};
	}
}

type Input = {
	gameId: string;
	name: string;
	yearsPlayed: number;
	discord: string;
	weekDays: string;
	hoursStart: string;
	hoursEnd: string;
	useVoiceChannel: boolean;
};

type Output = {
	name: string;
	yearsPlayed: number;
	weekDays: string[];
	hoursStart: string;
	hoursEnd: string;
	useVoiceChannel: boolean;
};
