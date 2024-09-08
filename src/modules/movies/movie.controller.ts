import { Request, Response } from "express";
import { MovieServices } from "./movie.service";

const createMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieServices.createMove(movieData);
  res.json({
    success: true,
    message: "Movie is created successfully!",
    data: result,
  });
};

export const MovieControllers = {
  createMovie,
};
