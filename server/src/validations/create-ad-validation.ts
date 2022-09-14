import { z } from "zod";

const createAdSchema = z.object({
	name: z.string(),
	yearsPlaying: z.number(),
	weekDays: z.array(z.number()),
	hoursStart: z.string(),
	hoursEnd: z.string(),
	useVoiceChannel: z.boolean(),
	discord: z.string(),
});

type createAdSchema = z.infer<typeof createAdSchema>;

export { createAdSchema };
