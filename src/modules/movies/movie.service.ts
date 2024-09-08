import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";
// import { format } from "date-fns";

// create movie
const createMovie = async (payload: TMovie) => {
  // date formate
  // const date = format(payload.releaseDate, "dd-MM-yyyy");
  // create slug
  // const slug = `${payload.title}-${date}`;
  // const slugs = slug.toLowerCase();
  //creating slug
  // const slug = slugify(`${payload.title}-${date}}`, {
  //   lower: true,
  // });
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

const getMovieBySlug = async (slug: string) => {
  const result = await Movie.findOne({ slug: slug });
  return result;
};

export const MovieServices = {
  createMovie,
  getAllMovies,
  getSingleMovie,
  getMovieBySlug,
};
