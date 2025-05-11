import express from "express";

import { createRequest, getAllRequests, loginUser } from "../controllers/loginController.js";

const router = express.Router();

// CRUD Routes
router
.get("/", getAllRequests) // Get all login data
.post("/register", createRequest) // Register new user
.post("/credential", loginUser) // Login credential

export default router;
