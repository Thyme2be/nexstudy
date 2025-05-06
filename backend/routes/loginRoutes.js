import express from "express";

import {
  getAllRequests,
  getRequestById,
} from "../controllers/tutoringController.js";

const router = express.Router();

// CRUD Routes
router
    .get("/", getAllRequests)       // Get all tutoring requests
    .get("/:id", getRequestById)    // Get a single request by ID

export default router;
