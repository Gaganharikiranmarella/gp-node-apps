import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoute from './routes/contact.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Root route (optional, to check server status)
app.get('/', (req, res) => {
  res.send('API is running');
});

// Use contact route
app.use('/api/contact', contactRoute);

export default app;
