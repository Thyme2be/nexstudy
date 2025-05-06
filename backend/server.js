import express from 'express';
import tutoringRoutes from './routes/tutoringRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import cors from "cors";

const app = express()
const port = 5000

app.use(cors());
app.use(express.json());
app.use('/api/tutoring', tutoringRoutes);
app.use('/api/login', loginRoutes);


app.listen(port, () => {
  console.log(`Back-end server listening on port http://localhost:${port}`)
})