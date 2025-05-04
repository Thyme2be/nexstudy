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

      // Log the parsed data for debugging
      console.log("Form Data:", req.body);
      console.log("Files:", req.files);

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
export const updateRequest = (req, res) => {
  const request = tutoringData.find((r) => r.id === parseInt(req.params.id));
  if (request) {
    Object.assign(request, req.body);
    res.json(request);
  } else {
    res.status(404).json({ message: "Request not found" });
  }
};

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
