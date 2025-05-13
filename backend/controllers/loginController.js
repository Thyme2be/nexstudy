import loginData from "../data/loginData.js";

// Get all tutoring requests
export const getAllRequests = (req, res) => {
  res.json(loginData);
};

// For Register and save to loginDB
export const createRequest = [
  (req, res) => {

    try {
      const {
        fullName,
        password,
        studentId,
        yearOfEntry
      } = req.body;

      const newRequest = {
        fullName: fullName,
        password: password,
        studentId: studentId,
        yearOfEntry: yearOfEntry
      }

      loginData.push(newRequest)
      res.status(201).json(newRequest)
      
    } catch (error) {
      res.status(400).json({error: "400 Bad Request"})
      console.error(`Error creating request: ${error}`)
    }
  }
]

export const loginUser = (req, res) => {
  try {
    const { username, password } = req.body

    const user = loginData.find((u) => u.studentId === username && u.password === password )

    if (user) {
      res.status(200).json()
    } else {
      res.status(401).json()
    }
    
  } catch (error) {
    res.status(500).json({ message: "Internal server error "})
    console.error(`Login error: ${error}`)
    
  }
}