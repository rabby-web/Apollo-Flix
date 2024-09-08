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

export const MovieServices = {
  createMovie,
  getAllMovies,
};
