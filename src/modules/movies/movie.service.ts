import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMove = async (payload: TMovie) => {
  const result = await Movie.create(payload);
  return result;
};

export const MovieServices = {
  createMove,
};
