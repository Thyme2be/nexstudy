import express from "express";

import { createRequest, getAllRequests } from "../controllers/tutorsController.js";

const router = express.Router();

// CRUD Routes
router
.get("/", getAllRequests) // Get all login data
.post("/create", createRequest) // Create new tutor

export default router;
