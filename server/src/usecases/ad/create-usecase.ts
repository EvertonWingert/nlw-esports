import { Ad } from "@prisma/client";
import { prisma } from "../../database";
import { convertHoursStringToMinutes } from "../../utils/convert-hours-string-to-minutes";
import { convertMinutesToHourString } from "../../utils/convert-minutes-to-hour-string";

export class CreateAdUseCase {
	async execute({
		gameId,
		name,
		yearsPlaying,
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
				yearsPlaying: yearsPlaying,
				discord: discord,
				weekDays: weekDays.join(","),
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
			yearsPlaying: ad.yearsPlaying,
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
	yearsPlaying: number;
	discord: string;
	weekDays: number[];
	hoursStart: string;
	hoursEnd: string;
	useVoiceChannel: boolean;
};

type Output = {
	name: string;
	yearsPlaying: number;
	weekDays: string[];
	hoursStart: string;
	hoursEnd: string;
	useVoiceChannel: boolean;
};
