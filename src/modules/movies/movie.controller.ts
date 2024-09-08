import { Request, Response } from "express";
import { MovieServices } from "./movie.service";

// create movie
const createMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieServices.createMovie(movieData);
  res.json({
    success: true,
    message: "Movie is created successfully!",
    data: result,
  });
};
// get all movies
const getAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await MovieServices.getAllMovies();
    res.status(200).json({
      success: true,
      message: "Movie is created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not fetch movies",
      data: err,
    });
  }
};

export const MovieControllers = {
  createMovie,
  getAllMovies,
};
