import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

// create movie
router.post("/", MovieControllers.createMovie);

// get all movies
router.get("/", MovieControllers.getAllMovies);

// get single movie
router.get("/:id", MovieControllers.getSingleMovie);

export const MovieRoutes = router;
