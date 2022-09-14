import { prisma } from "./index";

const load = async () => {
	try {
		await prisma.ad.deleteMany();
		console.log("Deleted records in ad table");

		await prisma.game.deleteMany();
		console.log("Deleted records in game table");

		await prisma.game.create({
			data: {
				title: "League of Legends",
				bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
			},
		});
		await prisma.game.create({
			data: {
				title: "CS:GO",
				bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg",
			},
		});
		await prisma.game.create({
			data: {
				title: "Apex Legends",
				bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg",
			},
		});
		await prisma.game.create({
			data: {
				title: "Valorant",
				bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
			},
		});
		await prisma.game.create({
			data: {
				title: "Fortnite",
				bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
			},
		});
		await prisma.game.create({
			data: {
				title: "Dota 2",
				bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg",
			},
		});

		console.log("Created records in game table");
	} catch (e) {
		console.error(e);
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
};

load();
