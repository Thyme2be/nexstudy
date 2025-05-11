import tutoringData from "../data/tutoringData.js";
import multer from "multer";

// Configure multer to handle file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Get all tutoring requests
export const getAllRequests = (req, res) => {
  res.json(tutoringData);
};

// Get a single tutoring request by ID
export const getRequestById = (req, res) => {
  const request = tutoringData.find((r) => r.id === parseInt(req.params.id));
  if (request) {
    res.json(request);
  } else {
    res.status(404).json({ message: "Request not found" });
  }
};

// Create a new tutoring request
export const createRequest = [
  upload.any(), // Middleware to handle multipart/form-data
  (req, res) => {
    try {
      const {
        subject,
        grade,
        tutoringFormat,
        via,
        preferredTimes,
        budget,
        numStudents,
        additionalNotes,
      } = req.body;

      if (
        !subject ||
        !grade ||
        !tutoringFormat ||
        !preferredTimes ||
        !budget ||
        !numStudents
      ) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const newRequest = {
        id: tutoringData.length + 1,
        subject,
        grade,
        tutoringFormat,
        via,
        preferredTimes,
        budget,
        numStudents,
        attachments: req.files || [], // Attachments from multer
        additionalNotes: additionalNotes || "",
      };

      tutoringData.push(newRequest);
      res.status(201).json(newRequest);
    } catch (error) {
      console.error("Error creating request:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
];

// Update a tutoring request by ID
export const updateRequest = [
  upload.any(), // Middleware to handle multipart/form-data
  (req, res) => {
    const requestId = parseInt(req.params.id); // Get the ID from the URL
    const request = tutoringData.find((r) => r.id === requestId); // Find the request by ID

    if (request) {
      // Update the request with new data
      const {
        subject,
        grade,
        tutoringFormat,
        via,
        preferredTimes,
        budget,
        numStudents,
        additionalNotes,
      } = req.body;

      // Log the parsed data for debugging
      console.log("Updated Form Data:", req.body);
      console.log("Updated Files:", req.files);

      // Update the fields
      request.subject = subject || request.subject;
      request.grade = grade || request.grade;
      request.tutoringFormat = tutoringFormat || request.tutoringFormat;
      request.via = via || request.via;
      request.preferredTimes = preferredTimes || request.preferredTimes;
      request.budget = budget || request.budget;
      request.numStudents = numStudents || request.numStudents;
      request.additionalNotes = additionalNotes || request.additionalNotes;

      // Update attachments if new files are uploaded
      if (req.files && req.files.length > 0) {
        request.attachments = req.files;
      }

      res.status(200).json({
        message: "Request updated successfully",
        updatedRequest: request,
      });
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  },
];

// Delete a tutoring request by ID
export const deleteRequest = (req, res) => {
  const index = tutoringData.findIndex((r) => r.id === parseInt(req.params.id));
  if (index !== -1) {
    tutoringData.splice(index, 1);
    res.json({ message: "Request deleted" });
  } else {
    res.status(404).json({ message: "Request not found" });
  }
};
