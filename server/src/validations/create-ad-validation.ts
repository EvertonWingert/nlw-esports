import { z } from "zod";

const createAdSchema = z.object({
	name: z.string(),
	yearsPlayed: z.number(),
	weekDays: z.string(),
	hoursStart: z.string(),
	hoursEnd: z.string(),
	useVoiceChannel: z.boolean(),
	discord: z.string(),
});

type createAdSchema = z.infer<typeof createAdSchema>;

export { createAdSchema };
