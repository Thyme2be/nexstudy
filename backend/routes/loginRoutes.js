import express from "express";

import { createRequest, getAllRequests } from "../controllers/loginController.js";

const router = express.Router();

// CRUD Routes
router
.get("/", getAllRequests) // Get all login data
.post("", createRequest)

export default router;
