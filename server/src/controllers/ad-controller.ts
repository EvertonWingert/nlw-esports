import { Response, Request, NextFunction } from "express";
import { createAdSchema } from "../validations/create-ad-validation";
import { ListAdsUseCase } from "../usecases/ad/list-usecase";
import { CreateAdUseCase } from "../usecases/ad/create-usecase";
import { FindAdUseCase } from "../usecases/ad/find-usecase";
import { FindAdDiscordUseCase } from "../usecases/ad/find-discord-usecase";

export class AdController {
	async index(request: Request, response: Response, next: NextFunction) {
		const { gameId } = request.params;

		const listAdsUseCase = new ListAdsUseCase();
		const ads = await listAdsUseCase.execute({ gameId });
		return response.status(200).json(ads);
	}

	async create(request: Request, response: Response, next: NextFunction) {
		const { gameId } = request.params;
		const body: createAdSchema = request.body;

		createAdSchema.parse(body);

		const createAdUseCase = new CreateAdUseCase();
		const ad = await createAdUseCase.execute({
			gameId,
			name: body.name,
			yearsPlaying: body.yearsPlaying,
			discord: body.discord,
			weekDays: body.weekDays,
			hoursStart: body.hoursStart,
			hoursEnd: body.hoursEnd,
			useVoiceChannel: body.useVoiceChannel,
		});

		return response.status(201).json(ad);
	}

	async show(request: Request, response: Response, next: NextFunction) {
		const { gameId, adId } = request.params;

		const findAd = new FindAdUseCase();
		const ad = await findAd.execute({ gameId: Number(gameId), adId });

		return response.status(200).json(ad);
	}

	async discord(request: Request, response: Response, next: NextFunction) {
		const { gameId, adId } = request.params;

		const findAdDiscord = new FindAdDiscordUseCase();
		const ad = await findAdDiscord.execute({ gameId: Number(gameId), adId });

		return response.status(200).json(ad);
	}
}
