import { Router } from "express";

import { getTrainings, BookTraining,fetchTraining } from "../controllers/trainingsController.js";

const router = Router();
router.get("/", getTrainings);
router.get("/:id", fetchTraining);
router.post("/:id/book", BookTraining);

export default router;
