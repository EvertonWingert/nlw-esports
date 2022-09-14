import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use(routes);

//middlewares

//start
app.listen(333);

export default app;
