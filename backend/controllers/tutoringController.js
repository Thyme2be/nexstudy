import tutoringData from "../data/tutoringData.js";

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
export const createRequest = (req, res) => {
  const {
    subject,
    grade,
    tutoringFormat,
    via,
    preferredTimes,
    budget,
    numStudents,
    attachments,
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
    attachments: attachments || [],
    additionalNotes: additionalNotes || "",
  };

  tutoringData.push(newRequest);
  res.status(201).json(newRequest);
};

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
