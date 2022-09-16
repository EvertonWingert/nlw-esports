import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { errorMiddleware } from "./middlewares/error-middleware";

const app = express();

//middlewares
app.use(cors({
    origin: "https://nlw-esports-web-zeta.vercel.app",
}));
app.use(express.json());

//routes
app.use(routes);

//middlewares
app.use(errorMiddleware);
//start
app.listen(333);

export default app;
