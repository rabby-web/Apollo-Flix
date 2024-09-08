import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

// create movie
router.post("/", MovieControllers.createMovie);

// get all movie
router.get("/", MovieControllers.getAllMovies);

export const MovieRoutes = router;
