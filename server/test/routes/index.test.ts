import { afterAll, describe, expect, test } from "vitest";
import supertest from "supertest";
import { Game, Ad } from "@prisma/client";

import app from "../../src/server";

describe("Test routes", () => {
	test("should return all games", async () => {
		const response = await supertest(app).get("/games").expect(200);
	});

	test("should return all ads", async () => {
		const response = await supertest(app).get("/games/1/ads").expect(200);
	});

	test("should create a ads", async () => {
		await supertest(app)
			.post("/games/1/ads")
			.send({
				name: "Teste",
				yearsPlayed: 3,
				discord: "domo#6858",
				weekDays: "0,1,2,3,4,5,6",
				hoursStart: "19",
				hoursEnd: "22",
				useVoiceChannel: true,
			})
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(201);
	});
});
