import express from "express";

import {
  getAllRequests,
  getRequestById,
  createRequest,
  updateRequest,
  deleteRequest,
} from "../controllers/tutoringController.js";

const router = express.Router();

// CRUD Routes
router
    .get("/", getAllRequests)       // Get all tutoring requests
    .get("/:id", getRequestById)    // Get a single request by ID
    .post("/", createRequest)       // Create a new tutoring request
    .put("/:id", updateRequest)     // Update a request by ID
    .delete("/:id", deleteRequest); // Delete a request by ID

export default router;
