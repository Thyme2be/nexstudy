import loginData from "../data/loginData.js";

// Get all tutoring requests
export const getAllRequests = (req, res) => {
  res.json(loginData);
};

// Get a single tutoring request by ID
export const getRequestById = (req, res) => {
  const request = loginData.find((r) => r.id === parseInt(req.params.id));
  if (request) {
    res.json(request);
  } else {
    res.status(404).json({ message: "Request not found" });
  }
};
