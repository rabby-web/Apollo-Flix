import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

// create movie
const createMovie = async (payload: TMovie) => {
  const result = await Movie.create(payload);
  return result;
};
// get all movie
const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};

// get single move
const getSingleMovie = async (id: string) => {
  const result = await Movie.findById(id);
  return result;
};

export const MovieServices = {
  createMovie,
  getAllMovies,
  getSingleMovie,
};
