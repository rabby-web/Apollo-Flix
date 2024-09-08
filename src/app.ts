import express, { Request, Response } from "express";
import { MovieRoutes } from "./modules/movies/movie.route";
const app = express();

app.use(express.json());

app.use("/api/movies", MovieRoutes);
// parsers

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World Demo😂");
});

export default app;
