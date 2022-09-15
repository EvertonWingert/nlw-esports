import { prisma } from "./index";

const load = async () => {
	try {
		await prisma.ad.deleteMany();
		console.log("Deleted records in ad table");

		await prisma.game.deleteMany();
		console.log("Deleted records in game table");

		await prisma.game.createMany({
			data: [
				{
					title: "League of Legends",
					bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
				},
				{
					title: "CS:GO",
					bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg",
				},
				{
					title: "Apex Legends",
					bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg",
				},
				{
					title: "Valorant",
					bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
				},
				{
					title: "Fortnite",
					bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
				},
				{
					title: "Dota 2",
					bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg",
				},
				{
					title: "Dead by Daylight",
					bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/491487-285x380.jpg",
				},
				{
					title: "Call of Duty: Warzone",
					bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
				},
				{
					title: "Rocket League",
					bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/30921-285x380.jpg",
				},
				{
					title: "PUBG: BATTLEGROUNDS",
					bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/493057-285x380.jpg",
				},
				{
					title: "Fall Guys",
					bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/512980-285x380.jpg",
				},
				{
					title: "Garena Free Fire",
					bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/502732_IGDB-285x380.jpg",
				},
			],
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
