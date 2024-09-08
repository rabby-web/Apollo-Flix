import express, { Request, Response } from "express";
import { Movie } from "./movie.model";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const result = await Movie.create(req.body);
  res.json({
    success: true,
    message: "Movie is created successfully!",
    data: result,
  });
});

export const MovieRoutes = router;
