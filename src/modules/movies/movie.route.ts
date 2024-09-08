import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

// create movie
router.post("/", MovieControllers.createMovie);

// get all movies
router.get("/", MovieControllers.getAllMovies);

// get single movie
router.get("/:id", MovieControllers.getSingleMovie);
router.get("/:slug", MovieControllers.getMovieBySlug);

export const MovieRoutes = router;
