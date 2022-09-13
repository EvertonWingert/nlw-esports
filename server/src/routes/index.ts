import express from "express";
import { AdController } from "../controllers/ad-controller";
import { GameController } from "../controllers/game-controller";

const routes = express.Router();

routes.get("/games", new GameController().index);
routes.get("/games/:gameId/ads", new AdController().index);
routes.post("/games/:gameId/ads", new AdController().create);
routes.get("/games/:gameId/ads/:adId", new AdController().show);
routes.get("/game/:gameId/ads/:adId/discord", new AdController().discord);

export { routes };
