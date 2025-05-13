import tutorsData from "./../data/tutorsData.js";

export const getAllRequests = (_, res) => {
  res.json(tutorsData);
};

export const createRequest = [
  (req, res) => {
    try {
      const { 
        fullName, 
        nickname,
        grade, 
        preferredDays, 
        cost, 
        subject 
      } = req.body;

      const newRequest = {
        id: tutorsData.length + 1,
        fullName: fullName,
        nickname: nickname,
        grade: grade,
        preferredDays: preferredDays,
        cost: cost,
        subject: subject
      };

      tutorsData.push(newRequest);
      res.status(201).json({ message: "Created Tutor Successfully" });
    } catch (error) {
      res.status(400).json({ error: "400 Bad Request" });
      console.error(`Error creating request: ${error}`);
    }
  },
];
