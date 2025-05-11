import loginData from "../data/loginData.js";

// Get all tutoring requests
export const getAllRequests = (req, res) => {
  res.json(loginData);
};

export const createRequest = [
  (req, res) => {
    try {
      const {
        fullName,
        password,
        studenId,
        yearOfEntry
      } = req.body;

      const newRequest = {
        id: loginData.length + 1,
        fullName: fullName,
        password: password,
        studenId: studenId,
        yearOfEntry: yearOfEntry
      }

      loginData.push(newRequest)
      res.staus(201).json(newRequest)
      
    } catch (error) {
      res.staus(400).json({error: "400 Bad Request"})
      console.error(`Error creating request: ${error}`)
    }
  }
]
