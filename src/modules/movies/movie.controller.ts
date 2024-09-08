/* eslint-disable @typescript-eslint/no-explicit-any */
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
      message: "Movie all find successfully!",
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

// find single student
const getSingleMovie = async (req: Request, res: Response) => {
  const movieId = req.params.id;
  const result = await MovieServices.getSingleMovie(movieId);
  res.status(200).json({
    success: true,
    message: "Movie find successfully!",
    data: result,
  });
};

const getMovieBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await MovieServices.getMovieBySlug(slug);

    res.status(200).json({
      success: true,
      message: "Movies are fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch movies!",
      error: err,
    });
  }
};

export const MovieControllers = {
  createMovie,
  getAllMovies,
  getSingleMovie,
  getMovieBySlug,
};
