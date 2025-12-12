import { Router } from "express";

import {
  getBookingsById,
} from "../controllers/userController.js";

const router = Router();
router.get("/:id/bookings", getBookingsById);

export default router;
